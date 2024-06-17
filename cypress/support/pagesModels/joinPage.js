class JoinPage {
  // Url
  loginUrl = () =>
    "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account";

  // Elements

  elements = {

    joinForm() {
      return cy.get("#create-account_form");
    },
    emailInput() {
      return cy.get("#email_create");
    },
    createAccountButton() {
      return cy.get("#SubmitCreate");
    },
    errorMessage() {
      return cy.get("#create_account_error");   
    },
  };

  // Actions

  typeEmailJoin(email) {
    this.elements.emailInput().type(email);
  }
  createdAccountAndLoginAreDisplayed() {
    this.elements.login.loginForm().should("be.visible");
    this.elements.join.joinForm().should("be.visible");
  }
  goToAuthenticationPage() {
    cy.visit(this.loginUrl());
  }
  clickSignInButton() {
    this.elements.login.signInButton().click();
  }

  clickCreateAccountButton() {
    this.elements.join.createAccountButton().click();
  }

  loginUrlvalidation() {
    cy.url().should("eq", this.loginUrl());
  }

  errorrMessageEmptyLoginIsVisible() {
    this.elements.login.errorMessage()
    .should("be.visible")
    .and("contain", "An email address required.");
  }

  errorMessageInvalidEmailIsVisible() {
    this.elements.login.errorMessage()
    .should("be.visible")
    .and("contain", "Invalid email address.");
  }

  errorMessageEmptyPasswordIsVisible() {
    this.elements.login.errorMessage()
    .should("be.visible")
    .and("contain", "Password is required.");
  }

  errorMessageEmptyJoin() {
    this.elements.join.errorMessage()
    .should("be.visible")
    .and("contain", "Invalid email address.");
  }
}

export default JoinPage;
