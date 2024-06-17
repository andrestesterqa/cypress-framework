import Header from "../Components/headerComponent";

class HomePage {
    homeSlider () {
        return cy.get("#homepage-slider");
    }

    navTabsComponent () {
        return cy.get("#home-page-tabs");
    }

    popularTab () {
        return cy.get(".homefeatured");
    }

    bestSellersTab () {
        return cy.get(".blockbestsellers");
    }

    contentHomePage () {
        return cy.get("#htmlcontent_home");
    }

    // Actions
    homeComponentAreVisible () {
        this.homeSlider().should("be.visible");
        this.navTabsComponent().should("be.visible");
        this.popularTab().should("be.visible");
        this.bestSellersTab().should("be.visible");
        this.contentHomePage().should("be.visible");
    }

    headerComponentsAreVisible () {
        const header = new Header();
        header.headerComponentsAreVisible();
    }

}
export default HomePage;

