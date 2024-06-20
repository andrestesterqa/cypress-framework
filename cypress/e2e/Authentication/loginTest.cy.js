/// <reference types="cypress" />
import LoginPage from "../../support/pagesModels/loginPage";
import Header from "../../support/Components/headerComponent";

describe("Login test", () => {
  const loging = new LoginPage();
  const header = new Header();
  let testData;

  beforeEach(function () {
    cy.fixture("userData").then(function (data) {
      testData = data;
      cy.log("DATA: ", data);
    });
    loging.goTologingenticationPage();
  });

  context("Login error message", () => {
    
  it("Check error message when input are empty", () => {
    loging.clickSignInButton();
    loging.errorrMessageEmptyLoginIsVisible();
  });

  it("Check error message when password is empty", () => {
    loging.typeEmailLogin(testData.emailRegistered);
    loging.clickSignInButton();
    loging.errorMessageEmptyPasswordIsVisible();
  });

  it("Check error message when email is invalid", () => {
    loging.typeEmailLogin("test");
    loging.clickSignInButton();
    loging.errorMessageInvalidEmailIsVisible();
  });

  it("Check error by Authentication failed", () => {
    loging.typeEmailLogin(testData.emailRegistered);
    loging.typePasswordLogin("test1234");
    loging.clickSignInButton();
    loging.errorMessageAuthFailedIsVisible();
  });

});
  it("Login Successful", () => {
    loging.login(testData.emailRegistered, testData.passwordRegistered);
    header.userLoggedNameIsVisible(testData.nameUserRegistered);
  });

  it("Logout Successful", () => {
    loging.login(testData.emailRegistered, testData.passwordRegistered);
    header.clickLogoutButton();
    header.userLoggedNameIsNotVisible();

  });

});
