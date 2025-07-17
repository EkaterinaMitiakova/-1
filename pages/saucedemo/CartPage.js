export class CartPage {
  constructor(page) {
    this.page = page;
    this.removeBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.cartItem = page.locator('.cart_item');
    this.checkout = page.locator('[data-test="checkout"]');
    this.continueShopping = page.locator('[data-test="continue-shopping"]');
  }

  async removeOneItem() {
    await this.removeBackpack.click();
  }

  async proceedToCheckout() {
    await this.checkout.click();
  }
}
