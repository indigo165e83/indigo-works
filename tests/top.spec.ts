import { test, expect } from '@playwright/test';

test.describe('TOPページ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('タイトルが「Indigo Works」であること', async ({ page }) => {
    await expect(page).toHaveTitle(/Indigo Works/);
  });

  test('「Indigo Works」の文字が表示されていること', async ({ page }) => {
    await expect(page.getByText('Indigo Works').first()).toBeVisible();
  });

  test('「START」ボタンが表示されていること', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'START' })).toBeVisible();
  });

  test('「START」ボタンをクリックすると /about に遷移すること', async ({ page }) => {
    await page.getByRole('link', { name: 'START' }).click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('「Sponsor」ボタンが表示されていること', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Sponsor' })).toBeVisible();
  });

  test('「Sponsor」ボタンをクリックすると別ウィンドウで GitHub Sponsors が開くこと', async ({ page, context }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.getByRole('link', { name: 'Sponsor' }).click(),
    ]);
    await newPage.waitForLoadState();
    expect(newPage.url()).toBe('https://github.com/sponsors/indigo165e83');
  });
});
