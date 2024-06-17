class LoginPage {
  // Url
  loginUrl = () =>
    "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account";

  // Elements

  elements = {
    titleAuthForms() {
      return cy.get(".page-heading");
    },
    loginForm() {
      return cy.get("#login_form");
    },
    emailInput() {
      return cy.get("#email");
    },
    passwordInput() {
      return cy.get("#passwd");
    },
    signInButton() {
      return cy.get("#SubmitLogin");
    },

    forgotPasswordLink() {
      return cy.get(".lost_password.form-group");
    },
    errorMessage() {
      return cy.get(".alert.alert-danger");
    },


  };

  // Actions

  goTologingenticationPage() {
    cy.visit(this.loginUrl());
  }

  typeEmailLogin(email) {
    this.elements.emailInput().type(email);
  }

  typePasswordLogin(password) {
    this.elements.passwordInput().type(password);
  }

  clickSignInButton() {
    this.elements.signInButton().click();
  }
  loginFormisDisplayed() {
    this.elements.loginForm().should("be.visible");
  }

  loginUrlvalidation() {
    cy.url().should("eq", this.loginUrl());
  }

  errorrMessageEmptyLoginIsVisible() {
    this.elements.errorMessage()
    .should("be.visible")
    .and("contain", "An email address required.");
  }

  errorMessageInvalidEmailIsVisible() {
    this.elements.errorMessage()
    .should("be.visible")
    .and("contain", "Invalid email address.");
  }

  errorMessageEmptyPasswordIsVisible() {
    this.elements.errorMessage()
    .should("be.visible")
    .and("contain", "Password is required.");
  }

  errorMessageAuthFailedIsVisible() {
    this.elements.errorMessage()
    .should("be.visible")
    .and("contain", "Authentication failed.");
  }


  login(email, password) {
    this.typeEmailLogin(email);
    this.elements.passwordInput().type(password);
    this.clickSignInButton();
  }

  checkUserInfoisVisible(userName) {
    this.elements.loggednUserInfo().should("be.visible")
  }

}

export default LoginPage;
