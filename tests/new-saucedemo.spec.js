import { test, expect } from '../fixtures/saucedemoFixture.js';

test('Добавление товаров в корзину', async ({ inventoryPage, loggedInPage }) => {
  await inventoryPage.addAllProducts();
  await expect(inventoryPage.cartBadge).toHaveText('3');
});

test('Удаление одного товара из корзины', async ({ inventoryPage, cartPage, loggedInPage }) => {
  await inventoryPage.addAllProducts();
  await inventoryPage.goToCart();
  await cartPage.removeOneItem();
  await expect(cartPage.cartItem).toHaveCount(2);
});

test('Переход к оформлению заказа', async ({ inventoryPage, cartPage, loggedInPage }) => {
  await inventoryPage.addAllProducts();
  await inventoryPage.goToCart();
  await cartPage.proceedToCheckout();
  await expect(cartPage.page.locator('.checkout_info')).toBeVisible();
});


//Ветка HW5