describe('template spec', () => {
  it('passes', () => {
    cy.intercept('GET', 'https://dataservice.accuweather.com/*', null);
    cy.visit('http://localhost:5173/');
  })
})