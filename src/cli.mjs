#!/usr/bin/env node
import path from 'node:path'
import { parseArgs } from 'node:util'
import { prepareRepo } from './repo.mjs'
import { scan, findCss } from './scan.mjs'
import { buildHarness } from './harness.mjs'
import { renderAll } from './render.mjs'
import { writeDocs } from './docs.mjs'

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    out: { type: 'string', default: 'design-library' },
    work: { type: 'string', default: '.work' },
    dirs: { type: 'string', multiple: true },
    css: { type: 'string', multiple: true },
    exclude: { type: 'string', multiple: true },
    examples: { type: 'string' },
    branch: { type: 'string' },
    only: { type: 'string' },
    width: { type: 'string', default: '1280' },
    'skip-install': { type: 'boolean', default: false },
  },
})

const source = positionals[0]
if (!source) {
  console.error('Usage: design-library <github-url|local-path> [--out dir] [--dirs src/components] [--css file] [--examples file.tsx] [--only Name,Name] [--exclude Name]')
  process.exit(1)
}

const work = path.resolve(values.work)
const out = path.resolve(values.out)

console.log('1/4 Preparing repository…')
const { dir, name } = prepareRepo(source, { workDir: work, branch: values.branch, skipInstall: values['skip-install'] })

console.log('2/4 Scanning components…')
let components = scan(dir, { dirs: values.dirs, exclude: values.exclude })
if (values.only) {
  const keep = new Set(values.only.split(','))
  components = components.filter((c) => keep.has(c.name))
}
if (!components.length) throw new Error('No React components found.')
console.log(`  found ${components.length}: ${components.map((c) => c.name).join(', ')}`)

console.log('3/4 Building render harness…')
const harnessDir = path.join(work, 'harness', name)
const cssFiles = values.css?.length ? values.css.map((f) => path.resolve(f)) : findCss(dir)
await buildHarness({ repoDir: dir, components, cssFiles, examplesFile: values.examples, outDir: harnessDir })

console.log('4/4 Rendering and capturing screenshots…')
await renderAll({ harnessDir, components, outDir: out, width: Number(values.width) })
writeDocs({ outDir: out, repoName: name, repoSource: source, harnessDir, components })

console.log(`\nDone. Open ${path.join(out, 'index.html')}`)
