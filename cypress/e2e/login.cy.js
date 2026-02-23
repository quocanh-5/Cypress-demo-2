import LoginPage from "../pages/loginPage";

describe("Login Feature", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it("Login successfully with valid credentials", () => {
    cy.fixture("user").then((user) => {
      loginPage.enterUsername(user.username);
      loginPage.enterPassword(user.password);
      loginPage.clickLogin();

      cy.url().should("include", "inventory");
    });
  });

  it("Show error with invalid password", () => {
    cy.fixture("user").then((user) => {
      loginPage.enterUsername(user.username);
      loginPage.enterPassword(user.invalidPassword);
      loginPage.clickLogin();

      loginPage.getErrorMessage().should("be.visible");
    });
  });
});