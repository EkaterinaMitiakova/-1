import { test, expect } from '@playwright/test';

// ✅ Конфигурируемые переменные для логина
const userName = 'standard_user';
const password = 'secret_sauce';

// ✅ Все локаторы в одном месте
const usernameSelector = '[data-test="username"]';
const passwordSelector = '[data-test="password"]';
const loginButtonSelector = '[data-test="login-button"]';
const errorSelector = '[data-test="error"]';
const itemTitleSelector = '[data-test="item-0-title-link"]';

// ✅ Ожидаемые тексты
const successText = 'Swag Labs';

// ✅ Функция логина
async function login(page, userName, password) {
  await page.locator(usernameSelector).fill(userName);
  await page.locator(passwordSelector).fill(password);
  await page.locator(loginButtonSelector).click();
}

// ✅ Группировка тестов
test.describe('Авторизация на сайте Swag Labs', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('Авторизация выбранного пользователя', async ({ page }) => {
    // ✅ Логинимся с выбранными данными
    await login(page, userName, password);

    // ✅ Проверяем результат
    if (userName === 'locked_out_user') {
      // Негативный кейс
      await expect(page.locator(errorSelector)).toBeVisible();
    } else {
      // Позитивный кейс
      await expect(page.getByText(successText)).toBeVisible();
      await expect(page.locator(itemTitleSelector)).toBeVisible();
    }
  });

});
