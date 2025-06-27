export class LoginPage {
    weblocators = {
        email: "#input-email",
        password: "#input-password",
        continue: '//a[text()="Continue"]',
        login: 'input[value="Login"]',
        forgotpass: '//a[text()="Forgotten Password"]',



    }
    openurl() {
        cy.visit(Cypress.env('LOGINURL'));
    }

    enteremailid(Emailid) {
        cy.get(this.weblocators.email).type(Emailid);
    }

    enterpassword(Pass) {
        cy.get(this.weblocators.password).type(Pass);
    }
    clickonlogin() {
        cy.get(this.weblocators.login).click();

    }
    clickoncontinue() {
        cy.xpath(this.weblocators.continue).click();
    }
    clickforgotpass() {
        cy.xpath(this.weblocators.forgotpass).first().click();
    }



}