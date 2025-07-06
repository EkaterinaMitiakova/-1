const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const password = 'secret_sauce';

const users = [
  { name: 'standard_user', expectSuccess: true },
  { name: 'locked_out_user', expectSuccess: false },
  { name: 'problem_user', expectSuccess: true },
  { name: 'performance_glitch_user', expectSuccess: true },
  { name: 'error_user', expectSuccess: true },
  { name: 'visual_user', expectSuccess: true }
];

test.describe('Авторизация пользователей на сайте Swag Labs', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  users.forEach(user => {
    test(`Авторизация пользователя: ${user.name}`, async () => {
      await loginPage.login(user.name, password);

      if (user.expectSuccess) {
        await loginPage.checkLoginSuccess();
      } else {
        await loginPage.checkLoginError();
      }
    });
  });
});
