/// <reference types="cypress" />
import JoinPage from "../../support/pagesModels/joinPage";
import LoginPage from "../../support/pagesModels/loginPage";

describe("Authentication Forms", () => {
  const auth = new LoginPage();

  beforeEach(() => {
    auth.goToAuthenticationPage();
  });

  it("Check Login and Join formn are visibles on Auth page", () => {
    auth.createdAccountAndLoginAreDisplayed();
  });
  context("Login Form", () => {
    it("Check error message when input are empty", () => {
      auth.clickSignInButton();
      auth.errorrMessageEmptyLoginIsVisible();
    });

    it ("Check error message when password is empty", () => {
      auth.typeEmailLogin("nI9wE@example.com");
      auth.clickSignInButton();
      auth.errorMessageEmptyPasswordIsVisible();

    })

    it ("Check error message when email is invalid", () => {
      auth.typeEmailInput("test");
      auth.clickSignInButton();
      auth.errorMessageInvalidEmailIsVisible();
    })

    it("Login", () => {
      auth.typeEmailLogin("nI9wE@example.com");
      auth.typePasswordLogin("test1234");
      auth.clickSignInButton();
    })


  });
  context("Join Form", () => {
    it("Check error message when input is empty", () => {
      auth.clickCreateAccountButton();
      auth.errorMessageEmptyJoin();
    });
  });

  context("Create an Account", () => {

    it("Create an account", () => {
      auth.typeEmailJoin("nI9wE@example.com");
    })
  })
});
