class InventoryPage {
  addFirstItemToCart() {
    cy.get(".inventory_item button").first().click();
  }

  openCart() {
    cy.get(".shopping_cart_link").click();
  }

  verifyCartBadge(count) {
    cy.get(".shopping_cart_badge").should("contain", count);
  }

  sortBy(option) {
    cy.get(".product_sort_container").select(option);
  }
}

export default InventoryPage;