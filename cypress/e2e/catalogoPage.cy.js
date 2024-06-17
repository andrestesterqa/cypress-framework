/// <reference types="cypress" />
import Header from "../support/Components/headerComponent";
import CatalogoPage from "../support/pagesModels/catalogoPage";

describe("Catalogo Page", () => {
const header = new Header();
const catalogoPage = new CatalogoPage();

beforeEach(() => {
    cy.visit("/");
  });

  // Falta registrar en TC

it ("Catalogo elements are visible", () => {
  catalogoPage.catalogoElementsAreVisible();
})
it("Search with results show text search and product list grid by default", () => {
  header.search("dress");
  catalogoPage.searchTextisVisible("dress");
  catalogoPage.productGridContainer().should("be.visible");
})

it("Search without text", () => {
  header.searchButton().click();
  catalogoPage.warningMessageIsVisible("Please enter a search keyword");
})

it("Search not found result", () => {
  header.search("not result");
  catalogoPage.warningMessageIsVisible(`No results were found for your search"not result"`);
  catalogoPage.resultsMessageIsVisible("0 results have been found.");
  catalogoPage.productGridContainer().should("not.exist");
})

it("View List grid", () => {
  header.search("dress");
  catalogoPage.sortByList().click().should("have.class", "selected");;
  catalogoPage.productListContainer().should("be.visible")

})

  });
