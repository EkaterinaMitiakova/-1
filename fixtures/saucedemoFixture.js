import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/saucedemo/LoginPage.js';
import { InventoryPage } from '../pages/saucedemo/InventoryPage.js';
import { CartPage } from '../pages/saucedemo/CartPage.js';

// Расширяем базовый test с нашими Page Object'ами
export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  loggedInPage: async ({ page, loginPage }, use) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await use(page); // возвращаем залогиненную страницу
  }
});

export { expect } from '@playwright/test';
