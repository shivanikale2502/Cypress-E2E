export class ContactUs {
    weblocators={
     yourname:'#input-name',
     youremail:'#input-email',
     enquiry:'#input-enquiry',
     submitbtnn:'input[value="Submit"]',
     verifymessafe:'//p[text()="Your enquiry has been successfully sent to the store owner!"]'

    }
    openurl(){
        cy.visit(Cypress.env('CONTACTUSURL'));
    }
    EnterYourName(name){
        cy.get(this.weblocators.yourname).type(name)
    }
    EnterYourEmail(emaill){
                cy.get(this.weblocators.youremail).type(emaill)

    }
    Enquiry(enq){
                cy.get(this.weblocators.enquiry).type(enq)

    }
    ClickOnSubmitBtn(){
                cy.get(this.weblocators.submitbtnn).click();

    }
    verifymessageon(){
        cy.xpath(this.weblocators.verifymessafe).should('have.text','Your enquiry has been successfully sent to the store owner!');
    }
}