
import 'cypress-file-upload';
Cypress.Commands.add('checkoutfunction', (CountryName,checkoutSuccess) => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.xpath('//button[text()="ADD TO CART"]').eq(9).click();
    cy.xpath('//button[text()="ADD TO CART"]').eq(21).click();
    cy.xpath('//button[text()="ADD TO CART"]').eq(27).click();
    cy.get('img[alt="Cart"]').click();
    cy.xpath('//button[text()="PROCEED TO CHECKOUT"]').click();
    cy.xpath('//button[text()="Place Order"]').click();
    cy.get('select option:disabled')
        .invoke('removeAttr', 'disabled');
    cy.get('select').select(CountryName);
    cy.get('[type="checkbox"]').check();
    cy.xpath('//button[text()="Proceed"]').click();
    cy.get('.wrapperTwo').contains("Thank you");
    cy.url().should('include', '/seleniumPractise');
})
