import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const GITHUB_URL = /^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+?)(?:\.git)?\/?$/

function run(cmd, args, cwd) {
  // shell is only used on Windows so npm.cmd resolves; all args are fixed or validated.
  const r = spawnSync(cmd, args, { cwd, stdio: 'inherit', shell: process.platform === 'win32' && cmd === 'npm' })
  if (r.status !== 0) throw new Error(`${cmd} ${args.join(' ')} failed`)
}

export function prepareRepo(source, { workDir, branch, skipInstall }) {
  let dir
  let name
  if (fs.existsSync(source)) {
    dir = path.resolve(source)
    name = path.basename(dir)
  } else {
    const m = GITHUB_URL.exec(source)
    if (!m) throw new Error(`Not a local path or https://github.com/<owner>/<repo> URL: ${source}`)
    name = m[2]
    dir = path.join(workDir, 'repos', `${m[1]}__${m[2]}`)
    if (fs.existsSync(path.join(dir, '.git'))) {
      run('git', ['-C', dir, 'pull', '--ff-only'])
    } else {
      fs.mkdirSync(path.dirname(dir), { recursive: true })
      run('git', ['clone', '--depth', '1', ...(branch ? ['--branch', branch] : []), `https://github.com/${m[1]}/${m[2]}.git`, dir])
    }
  }
  if (!skipInstall && !fs.existsSync(path.join(dir, 'node_modules'))) {
    const lock = fs.existsSync(path.join(dir, 'package-lock.json'))
    run('npm', [lock ? 'ci' : 'install', '--no-audit', '--no-fund'], dir)
  }
  return { dir, name }
}
