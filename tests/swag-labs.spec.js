import { test, expect } from '../fixtures/saucedemoFixture.js';

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

test.describe('Работа с корзиной после логина', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.login('standard_user', password);
  });

  test('Добавление товаров в корзину', async ({ inventoryPage }) => {
    await inventoryPage.addAllProducts();
    await expect(inventoryPage.cartBadge).toHaveText('3');
  });

  test('Удаление одного товара из корзины', async ({ inventoryPage, cartPage }) => {
    await inventoryPage.addAllProducts();
    await inventoryPage.goToCart();
    await cartPage.removeOneItem();
    await expect(cartPage.cartItem).toHaveCount(2);
  });

  test('Переход к оформлению заказа', async ({ inventoryPage, cartPage }) => {
    await inventoryPage.addAllProducts();
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();
    await expect(cartPage.page.locator('.checkout_info')).toBeVisible();
  });
});



//Ветка HW5