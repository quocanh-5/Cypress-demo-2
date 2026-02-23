import InventoryPage from "../pages/inventoryPage";
import CheckoutPage from "../pages/checkoutPage";

describe("Checkout Flow", () => {
  const inventory = new InventoryPage();
  const checkout = new CheckoutPage();

  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
    inventory.addFirstItemToCart();
    inventory.openCart();
    cy.get("#checkout").click();
  });

  it("Checkout successfully", () => {
    checkout.fillInformation("Quoc", "Anh", "10000");
    checkout.continueCheckout();
    checkout.finishCheckout();
    checkout.verifySuccess();
  });
});