
describe('verify the board functionality on Trello', () => {

  const APIKey = Cypress.env("APIKey");
  const APIToken = Cypress.env("APIToken");

  it('GET - All Boards', () => {
   
   cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/boards/22YMcHr8?key=${APIKey}&token=${APIToken}`

    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("idEnterprise",null);
      expect(response.duration).to.be.lessThan(1000);
    });
  });
 it('PUT -Update Board Name',()=>{
    cy.request({
        method:'PUT',
        url: `https://api.trello.com/1/boards/22YMcHr8?key=${APIKey}&token=${APIToken}&name='Sonus Board'`,
    }).should((response)=>{
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.lessThan(1000)

    })

 })

 it('GET - Get a field on a Board', () => {
   
   cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/boards/YvBTph7a/powerUps?key=${APIKey}&token=${APIToken}`

    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(1000);
    });
  });
  it('POST- Get Label On Board',()=>{
    cy.request({
        method:'POST',
        url:`https://api.trello.com/1/boards/686cc8305b19705b9d3994a2/labels?name=mayu&color=yellow&key=${APIKey}&token=${APIToken}`,


    }).should((response)=>{
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.lessThan(1000)

    })

 })
  it('POST- Create a List on a Board',()=>{
    cy.request({
        method:'POST',
        url:`https://api.trello.com/1/boards/686cc8305b19705b9d3994a2/lists?name=my list&key=${APIKey}&token=${APIToken}`,

    }).should((response)=>{
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.lessThan(1000)

    })

 })

  it('POST- Create A Board',()=>{
    cy.request({
        method:'POST',
        url:`https://api.trello.com/1/boards/?name=shobha&key=${APIKey}&token=${APIToken}`,
        

    }).should((response)=>{
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.lessThan(1000)

    })

 })

 
})