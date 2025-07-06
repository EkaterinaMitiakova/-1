const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.successText = 'Swag Labs';
    this.itemTitleSelector = '[data-test="item-0-title-link"]';
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async checkLoginSuccess() {
    await expect(this.page.getByText(this.successText)).toBeVisible();
    await expect(this.page.locator(this.itemTitleSelector)).toBeVisible();
  }

  async checkLoginError() {
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = { LoginPage };
