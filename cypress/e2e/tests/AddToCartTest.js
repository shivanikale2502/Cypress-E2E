describe('verify add to cart functionality', () => {
    let userdata;
    beforeEach(() => {
        cy.fixture('Register').then((data) => {
            userdata = data;

        })

    })
    it('verify user should be able to use add to cart functionality', () => {
        cy.checkoutfunction(userdata.Country);


    })

})