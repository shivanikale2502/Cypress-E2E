export class RegisterPageNegative {
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
        sidebarlinks: '.list-group-item',
        verifynamemessage: '//div[text()="First Name must be between 1 and 32 characters!"]',
        verfiylastnamemessage: '//div[text()="Last Name must be between 1 and 32 characters!"]',
        verifyemailmessage: '//div[text()="E-Mail Address does not appear to be valid!"]',
        verifytelmessage: '//div[text()="Telephone must be between 3 and 32 characters!"]',
        verfiypassmessage:'//div[text()="Password must be between 4 and 20 characters!"]',
        verifyprivacymessage:'//div[text()=" Warning: You must agree to the Privacy Policy!"]',
        passwordmismatch:"#input-confirm",
        verifymismatchpassmessage:"//div[text()='Password confirmation does not match password!']"




    };

    openurl() {
        cy.visit(Cypress.env('URL'));
    }

    enterfirstname() {
        cy.get(this.weblocators.firstname);
    }

    enterlastname(Lname) {
        cy.get(this.weblocators.lastname);
    }

    enteremailid(Emailid) {
        cy.get(this.weblocators.email);
    }

    entertelephone(Telephonno) {
        cy.get(this.weblocators.telephone);
    }

    enterpassword(Pass) {
        cy.get(this.weblocators.password);
    }

    enterconfirmpassword(Passconf) {
        cy.get(this.weblocators.passwordConfirm);
    }

    enterprivacy() {
        cy.get(this.weblocators.privacypolicy);
    }

    entercontinue() {
        cy.get(this.weblocators.continue).click();
    }
    verifyemptynamemessage() {
        cy.xpath(this.weblocators.verifynamemessage).should('have.text', 'First Name must be between 1 and 32 characters!');
    }
    verfiyemptylastnamemessage() {
        cy.xpath(this.weblocators.verfiylastnamemessage).should('have.text', 'Last Name must be between 1 and 32 characters!');
    } 
    verifyemptyemailmessage() {
        cy.xpath(this.weblocators.verifyemailmessage).should('have.text', 'E-Mail Address does not appear to be valid!');
    } 
    verifyemptytelmessage() {
        cy.xpath(this.weblocators.verifytelmessage).should('have.text', 'Telephone must be between 3 and 32 characters!');
    }
    verifyemptypassmessage() {
        cy.xpath(this.weblocators.verfiypassmessage).should('have.text', 'Password must be between 4 and 20 characters!');
    }
  verifyuncheckprivacymessage(){
    cy.xpath(this.weblocators.verifyprivacymessage).should('have.text',' Warning: You must agree to the Privacy Policy!')
  }
  entermismatchpass(mispass){
        cy.get(this.weblocators.passwordmismatch).type(mispass)

  }
  verifymismatchpassmessageerror(){
            cy.xpath(this.weblocators.verifymismatchpassmessage);

  }


}
