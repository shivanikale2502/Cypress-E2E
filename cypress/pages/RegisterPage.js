export class RegisterPage {
    weblocators = {
        firstname: "#input-firstname",
        lastname: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        password: "#input-password",
        passwordConfirm: "#input-confirm",
        privacypolicy: 'input[name="agree"]',
        continue: 'input[type="submit"]',
        registrationSuccess: '//h1[text()="Your Account Has Been Created!"]',
        sidebarlinks: '.list-group-item'

    };

    openurl() {
        cy.visit(Cypress.env('URL'));
    }

    enterfirstname(fname) {
        cy.get(this.weblocators.firstname).type(fname);
    }

    enterlastname(Lname) {
        cy.get(this.weblocators.lastname).type(Lname);
    }

    enteremailid(Emailid) {
        cy.get(this.weblocators.email).type(Emailid);
    }

    entertelephone(Telephonno) {
        cy.get(this.weblocators.telephone).type(Telephonno);
    }

    enterpassword(Pass) {
        cy.get(this.weblocators.password).type(Pass);
    }

    enterconfirmpassword(Passconf) {
        cy.get(this.weblocators.passwordConfirm).type(Passconf);
    }

    enterprivacy() {
        cy.get(this.weblocators.privacypolicy).check();
    }

    entercontinue() {
        cy.get(this.weblocators.continue).click();
    }

    checkRegistrationSuccess() {
        cy.xpath(this.weblocators.registrationSuccess).should('have.text', 'Your Account Has Been Created!')
    }
}
