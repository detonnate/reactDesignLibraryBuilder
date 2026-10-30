import fs from 'node:fs'
import path from 'node:path'
import esbuild from 'esbuild'

const fwd = (p) => p.replaceAll('\\', '/')

const RUNTIME = `
const h = React.createElement
const FN = '__fn__'
const noop = () => {}
const revive = (v) => v === FN ? noop : v === '__el__' ? h('span', null, 'Sample') : Array.isArray(v) ? v.map(revive) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, revive(x)])) : v
class Boundary extends React.Component {
  state = { e: null }
  static getDerivedStateFromError(e) { return { e } }
  componentDidCatch(e) { window.__DL.error = String((e && e.stack) || e) }
  render() { return this.state.e ? h('pre', { style: { color: '#b00020', whiteSpace: 'pre-wrap', font: '12px monospace' } }, 'Render error: ' + this.state.e.message) : this.props.children }
}
const q = new URLSearchParams(location.search)
const name = q.get('c')
const idx = Number(q.get('v') || 0)
window.__DL = { ready: false, error: null, variants: [] }
try {
  const Comp = registry[name]
  if (!Comp) throw new Error('Component not found: ' + name)
  const ex = examples[name]
  const list = ex || DATA[name].variants
  window.__DL.variants = list.map((v) => ({ name: v.name, props: v.props || {}, code: v.code }))
  const v = list[idx]
  const el = ex && v.render ? v.render() : h(Comp, revive(v.props || {}))
  createRoot(document.getElementById('root')).render(h(Boundary, null, el))
} catch (e) {
  window.__DL.error = String((e && e.stack) || e)
}
requestAnimationFrame(() => setTimeout(() => { window.__DL.ready = true }, 100))
`

export async function buildHarness({ repoDir, components, cssFiles, examplesFile, outDir }) {
  fs.mkdirSync(outDir, { recursive: true })
  const files = [...new Set(components.map((c) => c.absFile))]
  const idxOf = new Map(files.map((f, i) => [f, i]))
  const data = Object.fromEntries(components.map((c) => [c.name, { variants: c.variants }]))
  const entry = [
    `import React from 'react'`,
    `import { createRoot } from 'react-dom/client'`,
    ...cssFiles.map((f) => `import ${JSON.stringify(fwd(f))}`),
    ...files.map((f, i) => `import * as m${i} from ${JSON.stringify(fwd(f))}`),
    examplesFile ? `import examples from ${JSON.stringify(fwd(path.resolve(examplesFile)))}` : `const examples = {}`,
    `const registry = { ${components.map((c) => `${JSON.stringify(c.name)}: m${idxOf.get(c.absFile)}[${JSON.stringify(c.exportName)}]`).join(', ')} }`,
    `const DATA = ${JSON.stringify(data)}`,
    RUNTIME,
  ].join('\n')
  const entryPath = path.join(outDir, 'entry.jsx')
  fs.writeFileSync(entryPath, entry)

  await esbuild.build({
    entryPoints: [entryPath],
    outfile: path.join(outDir, 'harness.js'),
    bundle: true,
    format: 'iife',
    jsx: 'automatic',
    nodePaths: [path.join(repoDir, 'node_modules')],
    alias: { '@repo': repoDir },
    define: { 'process.env.NODE_ENV': '"development"' },
    loader: { '.svg': 'dataurl', '.png': 'dataurl', '.jpg': 'dataurl', '.gif': 'dataurl', '.woff': 'dataurl', '.woff2': 'dataurl', '.ttf': 'dataurl' },
    logLevel: 'warning',
  })
  fs.writeFileSync(
    path.join(outDir, 'harness.html'),
    `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="harness.css"><style>#stage{box-sizing:border-box;padding:24px;width:100%}</style></head><body><div id="stage"><div id="root"></div></div><script src="harness.js"></script></body></html>`,
  )
}
