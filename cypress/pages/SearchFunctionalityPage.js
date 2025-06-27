export class SearchFunctionalityPage{
    webloactors={
        search:'input[placeholder="Search"]',
        searchbutton:'button[class="btn btn-default btn-lg"]',
        verifyname:'//a[text()="iPhone"]'
    }
    openurl(){
        cy.visit(Cypress.env('SEARCHURL'))
    }
    enterinsearchbox(model){
        cy.get(this.webloactors.search).type(model);
    }
    clickonsearch(){
        cy.get(this.webloactors.searchbutton).click();
    }
    verifynameofproduct(){

        cy.xpath(this.webloactors.verifyname).should('have.text','iPhone');
    }






}