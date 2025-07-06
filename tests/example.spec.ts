import { test, expect } from '@playwright/test';

test.describe('Добавление задач', () => {})

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
})
test('test authorization', async ({ page }) => {

  const userName = "standard_user"
  const password = "secret_sauce"

  await page.locator('[data-test="username"]').fill(userName);
  await page.locator('[data-test="password"]').fill(password);
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
});
test('test reauthorization', async ({ page }) => {

  const userName = "standard_user"
  const password = "secret_sauce"

  await page.locator('[data-test="username"]').fill(userName);
  await page.locator('[data-test="password"]').fill(password);
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
  await expect(page.getByText('$9.99')).toBeVisible();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await page.locator('[data-test="username"]').fill(userName);
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
});
