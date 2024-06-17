/// <reference types="cypress" />
import HomePage from "../support/pagesModels/homePage";
import Footer from "../support/Components/footerComponent";
import Header from "../support/Components/headerComponent";
import AuthenticationPage from "../support/pagesModels/Auth/authenticationPage";
import CatalogoPage from "../support/pagesModels/catalogoPage";

describe("Home Page Look and Feel", () => {
const homepage = new HomePage();
const footer = new Footer();
const header = new Header();
const auth = new AuthenticationPage();
const catalogoPage = new CatalogoPage();


  beforeEach(() => {
    cy.visit("/");
  });

it("GEN-18 - Check the header components are visible", () => {
  homepage.headerComponentsAreVisible();
  })

it("GEN-17 - Check the home page components are visible", () => {
  homepage.homeComponentAreVisible();
  })

it("GEN-19 - Check the footer components are visible", () => {
  footer.footerElementsAreDisplayed();
  })

it("Check login form redirect from Home Page", () => {
  header.clickSignInButton();
  auth.loginUrlvalidation();
})

// Falta registrar en TC
it("Search with results show text search and product list grid by default", () => {
  header.search("dress");
  catalogoPage.searchTextisVisible("dress");
  catalogoPage.productListGridContainer().should("be.visible");
})

it("Search without text", () => {
  header.searchButton().click();
  catalogoPage.warningMessageIsVisible("Please enter a search keyword");
})

it("Search not found result", () => {
  header.search("not result");
  catalogoPage.warningMessageIsVisible(`No results were found for your search"not result"`);
  catalogoPage.resultsMessageIsVisible("0 results have been found.");
  catalogoPage.productListGridContainer().should("not.exist");
})

  });
