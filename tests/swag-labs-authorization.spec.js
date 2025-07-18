import { test, expect } from '../Fixture/saucedemoFixture.js';

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
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  for (const user of users) {
    test(`Авторизация пользователя: ${user.name}`, async ({ loginPage }) => {
      await loginPage.login(user.name, password);

      if (user.expectSuccess) {
        await loginPage.checkLoginSuccess();
      } else {
        await loginPage.checkLoginError();
      }
    });
  }
});


//5.2