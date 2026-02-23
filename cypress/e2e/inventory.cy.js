import InventoryPage from "../pages/inventoryPage";

describe("Inventory Feature", () => {
  const inventory = new InventoryPage();

  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
  });

  it("Add item to cart", () => {
    cy.intercept("GET", "**/inventory.html").as("inventory");

    inventory.addFirstItemToCart();
    inventory.verifyCartBadge(1);
  });

  it("Sort product A-Z", () => {
    inventory.sortBy("az");
  });
});