# React Design Library Agent

Clones a GitHub repo of React components, renders every exported component (and its prop variants) in headless Chromium, screenshots it, and writes a browsable design library.

```
npm install
npm run setup          # installs Chromium
npm run build:swiss    # demo against detonnate/reactSwissComponents
node src/cli.mjs <github-url|path> --out docs-out/mylib
```

Output (`docs-out/<name>/`): `index.html` gallery with search, `components/<Name>.html|.md` (screenshots, JSX usage, rendered HTML, props table), `html/` standalone HTML snippets for mockups, `screenshots/`, `manifest.json`.

Props and variants are inferred from TypeScript types. For components needing real data, pass `--examples file.jsx` (see `examples/swiss.examples.jsx`; `@repo/` aliases the target repo). Other flags: `--dirs`, `--css`, `--only`, `--exclude`, `--width`, `--branch`, `--skip-install`.

The Copilot custom agent is in `.github/agents/design-library.agent.md`; a manual GitHub Actions workflow is in `.github/workflows/design-library.yml`.
