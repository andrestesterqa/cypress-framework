class Header {

    phoneNumber = "0123-456-789";

    // Main banner element
    mainBanner () {
        return cy.get(".banner");
    }
    // Main nav element
    mainNav () {
        return cy.get(".nav");
    }
    callUsInformation() {
        return cy.get(".shop-phone");
    }
    signInButton() {
        return cy.get(".login");
    }
    contactUsButton() {
        return cy.get("#contact-link");
    }
    loggednUserInfo() {
        return cy.get(".header_user_info > .account")
      }

    logOutbutton() {
        return cy.get(".header_user_info > .logout");
    }
    // Logo brand element
    brandLogo() {
        return cy.get("#header_logo");
    }
    // Search component
    searchInput() {
        return cy.get("input[name='search_query']");
    }
    searchButton() {
        return cy.get("button[name='submit_search']");
    }
    // Cart component
    viewCart() {
        return cy.get(".shopping_cart a");
    }
    categoriesMenu() {
        return cy.get("#block_top_menu");
    }
    categoriesSubmenu() {
        return cy.get(".submenu-container");
    }

    // Actions
    headerComponentsAreVisible() {
        this.mainBanner().should("be.visible");
        this.mainNav().should("be.visible");
        this.brandLogo().should("be.visible");
        this.searchInput().should("be.visible");
        this.searchButton().should("be.visible");
        this.viewCart().should("be.visible");
        this.categoriesMenu().should("be.visible");
        this.signInButton().should("be.visible");
        this.contactUsButton().should("be.visible");
        this.callUsInformation().should("be.visible");
    }

    clickLogo() {
        this.brandLogo().click();
    }
    search(term) { 
        this.searchInput().type(term);
        this.searchButton().click();

    }
    clickSearchButton() {
        this.searchButton().click();
    }
    clickViewCart() {
        this.viewCart().click();
    }
    clickSignInButton() {
        this.signInButton().click();
    }
    clickContactUsButton() {
        this.contactUsButton().click();
    }
    callNumberIsVisible(phoneNumber) {
        this.callUsInformation().contains(phoneNumber);
    }

    userLoggedNameIsVisible(userName) {
        this.loggednUserInfo().find("span").contains(userName).and("be.visible");
    }

    userLoggedNameIsNotVisible() {
        this.loggednUserInfo().should("not.exist");
    }

    clickLogoutButton() {
        this.logOutbutton().click();
    }

}

export default Header;
