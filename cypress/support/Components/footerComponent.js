class Footer {
    footerContainer() {
        return cy.get("#footer");
    }

    newsLetterBlock() {
        return cy.get("#newsletter_block_left");
    }

    newsLetterInput() {
        return cy.get("#newsletter-input");
    }

    newsLetterButton() {
        return cy.get("button[name='submitNewsletter']");
    }

    newsLetterAlertSuccess() {
        return cy.get(".alert-success").should("have.text", "Newsletter : You have successfully subscribed to this newsletter.");
    }

    getSocialMediaTextBlock() {
        return cy.get("#social_block").should("contain", "Follow us").within(() => {
            cy.get("a[href*='facebook']").should("be.visible");
            cy.get("a[href*='prestashop']").should("be.visible");
            cy.get("a[href*='twitter']").should("be.visible");
        });
    }

    // Actions
    footerElementsAreDisplayed() {
        this.footerContainer();
        this.newsLetterBlock();
        this.getSocialMediaTextBlock();
    }
}
export default Footer;