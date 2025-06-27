export class ForgotPassword {

    weblocators = {
        emailid: '#input-email',
        continuebtn: 'input[value="Continue"]',
        backbtn: "//a[text()='Back']",
        validmsg: '//div[@class="alert alert-success alert-dismissible"]'

    }
    openurl() {
        cy.visit(Cypress.env('FORGOTPASSURL')) //taken from cypress config file which is like a path

    }
    enteremailid(email) {
        cy.get(this.weblocators.emailid).type(email)

    }
    clickoncontinue() {
        cy.get(this.weblocators.continuebtn).click();
    }
    clickonbackbtn() {
        cy.xpath(this.weblocators.backbtn).click();
    }
    validateEmailSentMessage() {
        cy.xpath(this.weblocators.validmsg).should('have.text', ' An email with a confirmation link has been sent your email address.')
    }







}