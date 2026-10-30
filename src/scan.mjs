import fs from 'node:fs'
import path from 'node:path'
import { Project, Node, ts } from 'ts-morph'

export const FN = '__fn__'
export const EL = '__el__'
const CANDIDATE_DIRS = ['src/components', 'components', 'src/ui', 'src/lib', 'src']
const TEXT_PROPS = new Set(['children', 'title', 'label', 'description', 'text', 'name', 'placeholder', 'message', 'heading', 'subtitle', 'caption', 'body'])
const PLACEHOLDER_IMG = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200"><rect width="100%" height="100%" fill="#ddd"/></svg>')
const fwd = (p) => p.replaceAll('\\', '/')

function sampleString(name) {
  if (/href|url|link/i.test(name)) return '#'
  if (/src|image|avatar/i.test(name)) return PLACEHOLDER_IMG
  if (/email/i.test(name)) return 'name@example.com'
  if (/^(id|key)$/i.test(name)) return 'sample'
  if (/label|title|heading/i.test(name)) return 'Sample ' + name
  return 'Sample text'
}

function sample(type, name, node, depth = 0) {
  if (depth > 3) return undefined
  if (type.isArray()) {
    const el = type.getArrayElementType()
    if (el.isString()) return ['One', 'Two', 'Three']
    const s = el && sample(el, name, node, depth + 1)
    return s === undefined ? [] : [s, s, s]
  }
  const alias = type.getAliasSymbol()?.getName() ?? ''
  const text = type.getText()
  if (/^(React\.)?(ReactElement|JSX\.Element)\b/.test(text)) return EL
  if (alias === 'ReactNode' || /^(React\.)?ReactNode\b/.test(text)) return 'Sample content'
  if (type.getCallSignatures().length) return FN
  if (type.isBooleanLiteral()) return type.getText() === 'true'
  if (type.isBoolean()) return false
  if (type.isStringLiteral() || type.isNumberLiteral()) return type.getLiteralValue()
  if (type.isUnion()) {
    const m = type.getUnionTypes().filter((t) => !t.isUndefined() && !t.isNull())
    if (!m.length) return undefined
    if (m.every((t) => t.isBooleanLiteral())) return false
    return sample(m.find((t) => !t.getCallSignatures().length) ?? m[0], name, node, depth)
  }
  if (type.isString()) return sampleString(name)
  if (type.isNumber()) return /max/i.test(name) ? 100 : /value|percent|progress/i.test(name) ? 60 : 3
  if (type.isTuple()) return undefined
  if (type.isObject()) {
    const out = {}
    for (const p of type.getProperties()) {
      if (p.hasFlags(ts.SymbolFlags.Optional)) continue
      const v = sample(p.getTypeAtLocation(node), p.getName(), node, depth + 1)
      if (v !== undefined) out[p.getName()] = v
    }
    return out
  }
  return undefined
}

function functionNode(decl) {
  if (Node.isFunctionDeclaration(decl)) return decl
  if (Node.isVariableDeclaration(decl)) {
    let init = decl.getInitializer()
    while (init && Node.isCallExpression(init)) init = init.getArguments()[0]
    if (init && (Node.isArrowFunction(init) || Node.isFunctionExpression(init))) return init
  }
}

function defaultsOf(decl) {
  const out = {}
  const first = functionNode(decl)?.getParameters()[0]?.getNameNode()
  if (first && Node.isObjectBindingPattern(first)) {
    for (const el of first.getElements()) {
      const init = el.getInitializer()
      if (init) out[el.getPropertyNameNode()?.getText() ?? el.getName()] = init.getText()
    }
  }
  return out
}

function describe(decl) {
  const target = Node.isVariableDeclaration(decl) ? decl.getVariableStatement() : decl
  return target?.getJsDocs?.().map((d) => d.getDescription().trim()).filter(Boolean).join('\n') ?? ''
}

function buildVariants(props) {
  const base = {}
  for (const p of props) {
    if (p.default !== undefined) continue
    if (p.required || TEXT_PROPS.has(p.name)) if (p.sample !== undefined) base[p.name] = p.sample
  }
  const variants = [{ name: 'Default', props: base }]
  for (const p of props) {
    if (variants.length >= 14) break
    if (p.literals?.length >= 2 && p.literals.length <= 8) {
      for (const v of p.literals) {
        if (variants.length >= 14) break
        if (base[p.name] === v) continue
        variants.push({ name: `${p.name}: ${v}`, props: { ...base, [p.name]: v } })
      }
    } else if (p.isBoolean && !/^on[A-Z]/.test(p.name) && base[p.name] !== true) {
      variants.push({ name: p.name, props: { ...base, [p.name]: true } })
    }
  }
  return variants
}

function analyze(name, decl, repoDir) {
  const sig = decl.getType().getCallSignatures()[0]
  if (!sig || !/Element|ReactNode|ReactPortal/.test(sig.getReturnType().getText())) return null
  const param = sig.getParameters()[0]
  const propsType = param?.getTypeAtLocation(decl)
  const defaults = defaultsOf(decl)
  const props = []
  for (const sym of propsType?.getApparentType().getProperties() ?? []) {
    const d = sym.getDeclarations()[0]
    if (d && fwd(d.getSourceFile().getFilePath()).includes('/node_modules/')) {
      if (sym.getName() === 'children' && defaults.children === undefined && /\bchildren\b/.test(functionNode(decl)?.getText() ?? '')) {
        props.push({ name: 'children', type: 'React.ReactNode', required: false, doc: '', sample: 'Sample content' })
      }
      continue
    }
    const t = sym.getTypeAtLocation(decl)
    const nonNull = t.isUnion() ? t.getUnionTypes().filter((u) => !u.isUndefined() && !u.isNull()) : [t]
    const literals = nonNull.length > 1 && nonNull.every((u) => u.isStringLiteral()) ? nonNull.map((u) => u.getLiteralValue()) : undefined
    let doc = ''
    try { doc = ts.displayPartsToString(sym.compilerSymbol.getDocumentationComment(undefined)) } catch {}
    props.push({
      name: sym.getName(),
      type: t.getText(decl).replace(/import\([^)]*\)\./g, '').slice(0, 160),
      required: !sym.hasFlags(ts.SymbolFlags.Optional),
      default: defaults[sym.getName()],
      doc,
      literals,
      isBoolean: nonNull.length > 0 && nonNull.every((u) => u.isBoolean() || u.isBooleanLiteral()),
      sample: sample(t, sym.getName(), decl),
    })
  }
  return { description: describe(decl), props, variants: buildVariants(props) }
}

export function scan(repoDir, { dirs, exclude = [] } = {}) {
  const dirList = (dirs?.length ? dirs : [CANDIDATE_DIRS.find((d) => fs.existsSync(path.join(repoDir, d)))]).filter(Boolean)
  if (!dirList.length) throw new Error('No component directory found. Pass --dirs.')
  const tsconfig = path.join(repoDir, 'tsconfig.json')
  const project = fs.existsSync(tsconfig)
    ? new Project({ tsConfigFilePath: tsconfig, skipAddingFilesFromTsConfig: true })
    : new Project({ compilerOptions: { jsx: ts.JsxEmit.ReactJSX, allowJs: true, strict: true } })
  for (const d of dirList) project.addSourceFilesAtPaths([fwd(path.join(repoDir, d, '**/*.{tsx,jsx}')), '!**/*.{test,spec,stories}.*'])

  const components = []
  const seen = new Set()
  for (const sf of project.getSourceFiles()) {
    const rel = fwd(path.relative(repoDir, sf.getFilePath()))
    for (const [name, decls] of sf.getExportedDeclarations()) {
      if (!/^[A-Z]/.test(name) || exclude.includes(name) || seen.has(name)) continue
      const info = analyze(name, decls[0], repoDir)
      if (!info) continue
      seen.add(name)
      components.push({
        name,
        exportName: name,
        file: rel,
        absFile: sf.getFilePath(),
        category: path.basename(rel).replace(/\.[jt]sx?$/, ''),
        ...info,
      })
    }
  }
  return components.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
}

export function findCss(repoDir) {
  const entries = ['src/main.tsx', 'src/main.jsx', 'src/index.tsx', 'src/index.jsx', 'src/App.tsx', 'src/main.ts', 'src/index.ts']
  const found = []
  for (const e of entries) {
    const f = path.join(repoDir, e)
    if (!fs.existsSync(f)) continue
    for (const m of fs.readFileSync(f, 'utf8').matchAll(/import\s+['"]([^'"]+\.css)['"]/g)) {
      const p = path.resolve(path.dirname(f), m[1])
      if (fs.existsSync(p)) found.push(p)
    }
  }
  if (found.length) return [...new Set(found)]
  const all = []
  const walk = (d) => {
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      if (ent.name === 'node_modules') continue
      const p = path.join(d, ent.name)
      if (ent.isDirectory()) walk(p)
      else if (ent.name.endsWith('.css')) all.push(p)
    }
  }
  if (fs.existsSync(path.join(repoDir, 'src'))) walk(path.join(repoDir, 'src'))
  return all.sort((a, b) => /token|variable|theme/i.test(b) - /token|variable|theme/i.test(a))
}
