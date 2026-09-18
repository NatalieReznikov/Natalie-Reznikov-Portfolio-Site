import { expect, test, type Page } from '@playwright/test';

async function expectSection(page: Page, id: string) {
  await expect(page.locator('.swiper')).toHaveAttribute('data-ready', 'true');
  await expect(page.locator('.swiper-slide[aria-hidden="false"]')).toHaveAttribute('data-section', id);
  await expect.poll(() => page.locator('.swiper-slide-active').getAttribute('data-section')).toBe(id);
}

test('every section supports direct links, titles, and refreshes', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  for (const id of ['home', 'bio', 'publications', 'cover-art', 'lab', 'contact']) {
    const path = id === 'home' ? '/' : `/${id}/`;
    expect((await page.goto(path))?.status()).toBe(200);
    await expectSection(page, id);
    await expect(page.locator('nav a[aria-current="page"]')).toHaveAttribute('href', path);
    await expect(page).toHaveTitle(/Natalie Reznikov/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://nataliereznikov.com${path}`);
  }
  await page.reload();
  await expectSection(page, 'contact');
  expect(errors).toEqual([]);
});

test('navigation creates one history entry and restores section scroll positions', async ({ page }) => {
  await page.goto('/publications/');
  await expectSection(page, 'publications');
  await page.locator('[data-scroll-section="publications"]').evaluate((el) => { el.scrollTop = 500; });
  const historyLength = await page.evaluate(() => history.length);
  await page.getByRole('link', { name: 'Lab', exact: true }).click();
  await expect(page).toHaveURL(/\/lab\/$/);
  await expectSection(page, 'lab');
  expect(await page.evaluate(() => history.length)).toBe(historyLength + 1);
  await page.goBack();
  await expectSection(page, 'publications');
  expect(await page.locator('[data-scroll-section="publications"]').evaluate((el) => el.scrollTop)).toBe(500);
  await page.goForward();
  await expectSection(page, 'lab');
});

test('rapid navigation settles on the most recent destination', async ({ page }) => {
  await page.goto('/');
  await expectSection(page, 'home');
  await page.getByRole('link', { name: 'Lab', exact: true }).click();
  await page.getByRole('link', { name: 'Bio', exact: true }).click();
  await page.getByRole('link', { name: 'Publications', exact: true }).click();
  await expect(page).toHaveURL(/\/publications\/$/);
  await expectSection(page, 'publications');
});

test('horizontal gestures navigate while vertical gestures stay in the section', async ({ page, context }) => {
  await page.goto('/publications/');
  await expectSection(page, 'publications');
  const session = await context.newCDPSession(page);
  const box = await page.locator('.swiper').boundingBox();
  if (!box) throw new Error('Carousel has no bounds');
  const x = box.x + box.width * 0.8;
  const y = box.y + Math.min(box.height * 0.5, 300);
  async function gesture(dx: number, dy: number) {
    await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
    for (let i = 1; i <= 10; i++) {
      await session.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x + dx * i / 10, y: y + dy * i / 10 }] });
      await page.waitForTimeout(16);
    }
    await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  }
  await gesture(0, -180);
  await expect(page).toHaveURL(/\/publications\/$/);
  expect(await page.locator('[data-scroll-section="publications"]').evaluate((el) => el.scrollTop)).toBeGreaterThan(0);
  const before = await page.evaluate(() => history.length);
  await gesture(-box.width * 0.65, 0);
  await expect(page).toHaveURL(/\/cover-art\/$/);
  await expectSection(page, 'cover-art');
  expect(await page.evaluate(() => history.length)).toBe(before + 1);
  await page.goBack();
  await expectSection(page, 'publications');
});

test('keyboard navigation works with reduced motion and inactive slides are inert', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expectSection(page, 'home');
  await page.getByRole('region', { name: 'Website sections' }).focus();
  await page.keyboard.press('ArrowRight');
  await expectSection(page, 'bio');
  await expect(page.locator('[data-section="home"]')).toHaveAttribute('inert', '');
  expect(await page.locator('.swiper-wrapper').evaluate((el) => parseFloat(getComputedStyle(el).transitionDuration))).toBeLessThan(0.01);
});

test('cover captions can be opened with a tap and closed again', async ({ page }) => {
  await page.goto('/cover-art/');
  await expectSection(page, 'cover-art');
  const button = page.getByRole('button', { name: /^Caption:/ }).first();
  await button.click();
  await expect(button).toHaveAttribute('aria-expanded', 'true');
  await button.click();
  await expect(button).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#caption-cover-9')).not.toBeVisible();
});

test('portrait is loaded, visible, and stays inside the home section', async ({ page }) => {
  await page.goto('/');
  await expectSection(page, 'home');
  const portrait = page.getByRole('img', { name: 'Natalie Reznikov, smiling.' });
  await portrait.evaluate((img: HTMLImageElement) => img.decode());
  await expect(portrait).toBeVisible();
  const image = await portrait.boundingBox();
  const section = await page.locator('[data-section="home"]').boundingBox();
  if (!image || !section) throw new Error('Home layout is missing');
  expect(image.width).toBeGreaterThan(200);
  expect(image.y + image.height).toBeLessThanOrEqual(section.y + section.height + 1);
});

test('portrait stays square, anchored, clear of text, and as large as possible after resizing', async ({ page }) => {
  await page.goto('/');
  await expectSection(page, 'home');
  await page.evaluate(() => document.fonts.ready);

  async function expectPortraitFits() {
    await expect(async () => {
      const { hero, text, portrait, image } = await page.locator('.hero').evaluate((el) => {
        const rect = (element: Element) => element.getBoundingClientRect().toJSON();
        return {
          hero: rect(el),
          text: rect(el.querySelector('.text')!),
          portrait: rect(el.querySelector('.portrait')!),
          image: rect(el.querySelector('.portrait img')!)
        };
      });
      expect(portrait.width).toBeGreaterThan(0);
      expect(Math.abs(portrait.width - portrait.height)).toBeLessThan(0.1);
      expect(Math.abs(image.width - portrait.width)).toBeLessThan(0.1);
      expect(Math.abs(image.height - portrait.height)).toBeLessThan(0.1);
      expect(Math.abs(portrait.right - hero.right)).toBeLessThan(0.1);
      expect(Math.abs(portrait.bottom - hero.bottom)).toBeLessThan(0.1);
      expect(portrait.left).toBeGreaterThanOrEqual(hero.left - 0.1);
      expect(portrait.top).toBeGreaterThanOrEqual(hero.top - 0.1);
      expect(portrait.left >= text.right - 0.1 || portrait.top >= text.bottom - 0.1).toBe(true);

      // Growing the anchored square by one pixel must break at least one constraint.
      const largerLeft = portrait.left - 1;
      const largerTop = portrait.top - 1;
      const outside = largerLeft < hero.left || largerTop < hero.top;
      const overlapsText = largerLeft < text.right && largerTop < text.bottom;
      expect(outside || overlapsText).toBe(true);
    }).toPass({ timeout: 3000 });
  }

  for (const [width, height] of [
    [512, 434], [390, 844], [844, 390], [320, 568],
    [700, 540], [701, 540], [1280, 800], [1920, 1080]
  ]) {
    await page.setViewportSize({ width, height });
    await expectPortraitFits();
  }

  // Text can reflow independently of the viewport, for example when a font loads.
  await page.setViewportSize({ width: 512, height: 434 });
  await page.locator('.hero p').evaluate((el) => { el.style.fontSize = '26px'; });
  await expectPortraitFits();
});

test('static pages have usable navigation without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4175/lab/');
  await expect(page.getByRole('heading', { name: 'Vinay Ashok Kumar' })).toBeVisible();
  await page.getByRole('link', { name: 'Publications', exact: true }).click();
  await expect(page).toHaveURL(/\/publications\/$/);
  await expect(page.getByRole('heading', { name: /Trabecular bone formation/ })).toBeVisible();
  await context.close();
});
