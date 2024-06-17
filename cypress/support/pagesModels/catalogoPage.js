
class CatalogoPage {
    searchTextResult () {
        return cy.get("h1[class='page-heading  product-listing' ] > span");
    }

    warningMessageWithoutResult() {
        return cy.get(".alert.alert-warning");
      }

    counterResults() {
        return cy.get(".heading-counter");
    }

    sortByGrid() {
        return cy.get("#grid");
    }

    sortByList() {
        return cy.get("#list");
    }

    productGridContainer() {
        return cy.get(".product_list.row.grid");
    }

    productListContainer() {
        return cy.get(".product_list.row.list");
    }

    topSellerBlock() {
        return cy.get("#best-sellers_block_right");
    }


    // Methods

    catalogoElementsAreVisible() {
        this.topSellerBlock().should('be.visible');
        this.productGridContainer().should('be.visible');
        this.sortByGrid().should('be.visible');
        this.sortByList().should('be.visible');
    }
    searchTextisVisible (term) {
        this.searchTextResult().contains(term).should('be.visible');
    }

    warningMessageIsVisible(message) {
        this.warningMessageWithoutResult().invoke('text').then((actualText) => {
          const cleanedActualText = actualText.replace(/ /g, '').trim(); // Limpiar el texto y eliminar espacios
          // Primero, verificar que el texto sea igual al mensaje esperado
          expect(cleanedActualText).contains(message);
          // Después, verificar que el elemento sea visible
          this.warningMessageWithoutResult().should('be.visible');
        });
      }
    resultsMessageIsVisible(message) {
        this.counterResults().invoke('text').then((actualText) => {
          const cleanedActualText = actualText.replace(/ /g, '').trim(); // Limpiar el texto y eliminar espacios
          // Primero, verificar que el texto sea igual al mensaje esperado
          expect(cleanedActualText).contains(message);
          this.counterResults().should('be.visible');
        });
      }

}
export default CatalogoPage;

