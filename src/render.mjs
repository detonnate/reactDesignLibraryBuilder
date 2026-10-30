import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { chromium } from 'playwright'

export const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'x'

export async function renderAll({ harnessDir, components, outDir, width = 1280, log = console.log }) {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width, height: 800 } })
  const pageErrors = []
  page.on('pageerror', (e) => pageErrors.push(String(e)))
  const url = (name, v) => `${pathToFileURL(path.join(harnessDir, 'harness.html')).href}?c=${encodeURIComponent(name)}&v=${v}`

  const load = async (name, v) => {
    pageErrors.length = 0
    await page.goto(url(name, v))
    await page.waitForFunction(() => window.__DL && window.__DL.ready)
    await page.evaluate(() => document.fonts.ready)
    return page.evaluate(() => window.__DL)
  }

  for (const comp of components) {
    const dir = path.join(outDir, 'screenshots', comp.name)
    fs.mkdirSync(dir, { recursive: true })
    let first
    try { first = await load(comp.name, 0) } catch (e) { first = { variants: [], error: String(e) } }
    const list = first.variants.length ? first.variants : [{ name: 'Default', props: {} }]
    comp.variants = []
    for (let i = 0; i < list.length; i++) {
      const state = i === 0 ? first : await load(comp.name, i)
      const file = `${String(i).padStart(2, '0')}-${slug(list[i].name)}.png`
      const info = await page.evaluate(() => {
        const extra = [...document.body.children].filter((e) => e.tagName !== 'SCRIPT' && e.id !== 'stage')
        const stage = document.getElementById('stage')
        return {
          extra: extra.length,
          height: stage.getBoundingClientRect().height,
          html: [stage.querySelector('#root').innerHTML, ...extra.map((e) => e.outerHTML)].filter(Boolean).join('\n'),
        }
      })
      if (info.extra > 0 || info.height < 50) await page.screenshot({ path: path.join(dir, file) })
      else await page.locator('#stage').screenshot({ path: path.join(dir, file) })
      const error = state.error || pageErrors[0] || null
      comp.variants.push({ name: list[i].name, props: list[i].props, code: list[i].code, image: `screenshots/${comp.name}/${file}`, html: info.html, error })
    }
    const bad = comp.variants.filter((v) => v.error).length
    log(`  ${comp.name}: ${comp.variants.length} variant(s)${bad ? `, ${bad} with errors` : ''}`)
  }
  await browser.close()
}
