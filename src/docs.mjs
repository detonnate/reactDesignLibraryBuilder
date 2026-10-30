import fs from 'node:fs'
import path from 'node:path'
import { FN } from './scan.mjs'
import { slug } from './render.mjs'

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function jsxValue(v) {
  if (v === FN) return '{() => {}}'
  if (v === '__el__') return '{<span>Sample</span>}'
  if (typeof v === 'string') return v.startsWith('data:') ? '"…"' : JSON.stringify(v)
  return `{${JSON.stringify(v)}}`
}

function toJsx(name, props) {
  const { children, ...rest } = props || {}
  const attrs = Object.entries(rest).map(([k, v]) => (v === true ? k : `${k}=${jsxValue(v)}`))
  const open = [name, ...attrs].join(' ')
  if (children === undefined) return `<${open} />`
  const inner = typeof children === 'string' ? children : `{${JSON.stringify(children)}}`
  return `<${open}>${inner}</${name}>`
}

const CSS = `
:root{--bg:#fafafa;--fg:#111;--mut:#666;--line:#e3e3e3;--acc:#d52b1e}
*{box-sizing:border-box}body{margin:0;font:15px/1.5 system-ui,sans-serif;background:var(--bg);color:var(--fg)}
header{padding:32px 40px;border-bottom:1px solid var(--line);background:#fff}
h1{margin:0 0 4px;font-size:28px}h2{margin:40px 0 12px;font-size:18px}h3{margin:0 0 8px;font-size:14px;color:var(--mut);font-weight:600}
main{padding:24px 40px 80px;max-width:1400px;margin:auto}a{color:var(--acc)}
.muted{color:var(--mut)}input[type=search]{padding:10px 14px;width:100%;max-width:420px;border:1px solid var(--line);font:inherit}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}
.card{background:#fff;border:1px solid var(--line);text-decoration:none;color:inherit;display:block}
.card .thumb{height:170px;overflow:hidden;border-bottom:1px solid var(--line);display:flex;align-items:flex-start;justify-content:center;background:#fff}
.card .thumb img{width:100%;object-fit:cover;object-position:top left}
.card .meta{padding:12px 14px}.card b{display:block}
.variant{background:#fff;border:1px solid var(--line);margin-bottom:24px}
.variant>div{padding:12px 16px}.variant img{max-width:100%;display:block;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
pre{margin:0;padding:12px;background:#111;color:#eee;overflow:auto;font:12px/1.5 ui-monospace,monospace;white-space:pre-wrap;word-break:break-all}
table{border-collapse:collapse;width:100%;background:#fff}th,td{text-align:left;padding:8px 12px;border:1px solid var(--line);vertical-align:top}
code{font:12px ui-monospace,monospace;background:#eee;padding:1px 5px}.err{color:#b00020}
details{margin-top:8px}summary{cursor:pointer;color:var(--mut)}
`

const page = (title, body, root = '') =>
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><style>${CSS}</style></head><body>${body}</body></html>`

export function writeDocs({ outDir, repoName, repoSource, harnessDir, components }) {
  fs.mkdirSync(path.join(outDir, 'components'), { recursive: true })
  fs.mkdirSync(path.join(outDir, 'assets'), { recursive: true })
  const cssSrc = path.join(harnessDir, 'harness.css')
  if (fs.existsSync(cssSrc)) fs.copyFileSync(cssSrc, path.join(outDir, 'assets', 'library.css'))

  for (const c of components) {
    const importPath = c.file.replace(/\.[jt]sx?$/, '')
    const variants = c.variants.map((v, i) => {
      const vslug = `${String(i).padStart(2, '0')}-${slug(v.name)}`
      const standalone = `html/${c.name}/${vslug}.html`
      fs.mkdirSync(path.join(outDir, 'html', c.name), { recursive: true })
      fs.writeFileSync(
        path.join(outDir, standalone),
        `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="../../assets/library.css"></head><body><div style="padding:24px">${v.html}</div></body></html>`,
      )
      return { ...v, standalone, code: v.code ?? toJsx(c.name, v.props) }
    })
    const propsRows = c.props.map((p) => `<tr><td><code>${esc(p.name)}</code>${p.required ? ' <span class="err">*</span>' : ''}</td><td><code>${esc(p.type)}</code></td><td>${p.default !== undefined ? `<code>${esc(p.default)}</code>` : ''}</td><td>${esc(p.doc)}</td></tr>`).join('')
    const body = `<header><a href="../index.html">&larr; ${esc(repoName)} library</a><h1>${esc(c.name)}</h1><div class="muted">${esc(c.category)} &middot; <code>${esc(c.file)}</code></div>${c.description ? `<p>${esc(c.description)}</p>` : ''}</header>
<main><h2>Import</h2><pre>import { ${esc(c.name)} } from '${esc(importPath)}'</pre>
<h2>Variants</h2>
${variants.map((v) => `<section class="variant" id="${slug(v.name)}"><div><h3>${esc(v.name)}</h3></div><img src="../${esc(v.image)}" alt="${esc(c.name)} - ${esc(v.name)}" loading="lazy">
<div>${v.error ? `<p class="err">Render error: ${esc(v.error.split('\n')[0])}</p>` : ''}<pre>${esc(v.code)}</pre>
<details><summary>Rendered HTML</summary><pre>${esc(v.html)}</pre></details><p class="muted"><a href="../${esc(v.standalone)}">Standalone HTML preview</a></p></div></section>`).join('\n')}
<h2>Props</h2>${c.props.length ? `<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>${propsRows}</tbody></table>` : '<p class="muted">No documented props.</p>'}</main>`
    fs.writeFileSync(path.join(outDir, 'components', `${c.name}.html`), page(`${c.name} - ${repoName}`, body))

    fs.writeFileSync(
      path.join(outDir, 'components', `${c.name}.md`),
      [`# ${c.name}`, '', c.description, `Source: \`${c.file}\``, '', '## Variants', '',
        ...variants.flatMap((v) => [`### ${v.name}`, '', `![${c.name} ${v.name}](../${v.image})`, '', '```tsx', v.code, '```', '']),
        '## Props', '', '| Name | Type | Required | Default | Description |', '|---|---|---|---|---|',
        ...c.props.map((p) => `| \`${p.name}\` | \`${p.type.replace(/\|/g, '\\|')}\` | ${p.required ? 'yes' : ''} | ${p.default ?? ''} | ${p.doc.replace(/\n/g, ' ')} |`), ''].join('\n'),
    )
  }

  const groups = Object.groupBy(components, (c) => c.category)
  const index = `<header><h1>${esc(repoName)} design library</h1><p class="muted">${components.length} components from ${esc(repoSource)}</p><input type="search" id="q" placeholder="Filter components…"></header>
<main>${Object.entries(groups).map(([cat, list]) => `<h2>${esc(cat)}</h2><div class="grid">${list.map((c) => `<a class="card" data-name="${esc(c.name.toLowerCase())}" href="components/${esc(c.name)}.html"><div class="thumb"><img src="${esc(c.variants[0].image)}" alt="" loading="lazy"></div><div class="meta"><b>${esc(c.name)}</b><span class="muted">${c.variants.length} variant(s)</span></div></a>`).join('')}</div>`).join('')}</main>
<script>document.getElementById('q').addEventListener('input',e=>{const v=e.target.value.toLowerCase();document.querySelectorAll('.card').forEach(c=>c.style.display=c.dataset.name.includes(v)?'':'none')})</script>`
  fs.writeFileSync(path.join(outDir, 'index.html'), page(`${repoName} design library`, index))

  fs.writeFileSync(
    path.join(outDir, 'manifest.json'),
    JSON.stringify({ repo: repoSource, generatedAt: new Date().toISOString(), components: components.map(({ absFile, ...c }) => ({ ...c, props: c.props.map(({ sample, literals, isBoolean, ...p }) => p), variants: c.variants.map(({ html, ...v }) => v) })) }, null, 2),
  )
}
