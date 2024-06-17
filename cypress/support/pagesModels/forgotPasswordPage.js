class ForgotPasswordPage {

    // Url        
    loginUrl = () => "http://www.automationpractice.pl/index.php?controller=password";


    // Elements

    elements = {
        titleForgotePasswordForm() {
            return cy.get(".page-subheading").contains("Forgot your password?");
        },
        labelForNewPassword() {
            return cy.xpath("//p[contains(text(),'Please enter the email address you used to registe')]");
        },

        emailInput() {
            return cy.get("#email");
        },

        submitButton() {
            return cy.get(".submit");
        },

        backToLoginButton() {
            return cy.get("a[title='Back to Login']")
        }

    }


    // Actions
    

}

export default ForgotPasswordPage;