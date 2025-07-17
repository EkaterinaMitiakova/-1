export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.bike = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.shirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addAllProducts() {
    await this.backpack.click();
    await this.bike.click();
    await this.shirt.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
