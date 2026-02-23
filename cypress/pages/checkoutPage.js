class CheckoutPage {
  fillInformation(first, last, zip) {
    cy.get("#first-name").type(first);
    cy.get("#last-name").type(last);
    cy.get("#postal-code").type(zip);
  }

  continueCheckout() {
    cy.get("#continue").click();
  }

  finishCheckout() {
    cy.get("#finish").click();
  }

  verifySuccess() {
    cy.contains("Thank you for your order!").should("be.visible");
  }
}

export default CheckoutPage;