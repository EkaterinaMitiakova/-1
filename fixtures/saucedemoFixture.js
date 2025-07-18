import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/saucedemo/LoginPage.js';
import { InventoryPage } from '../pages/saucedemo/InventoryPage.js';
import { CartPage } from '../pages/saucedemo/CartPage.js';

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
  loginAsStandard: async ({ loginPage }, use) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await use();
  }
});

export { expect } from '@playwright/test';
