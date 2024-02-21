describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
describe("Visit the homepage", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      fixture: "example.json",
    })
    cy.visit("http://localhost:3000");
  });
  it("should display page with tricks and form inputs", () => {
    cy.get("h1").contains("Sick Trick Wish List").should("be.visible");
    cy.get('input[placeholder="Name of Trick"]').should("be.visible");
    cy.get('select[name="stance"]').should('be.visible').and('have.text', 'Select a StanceRegularSwitch');
    cy.get('select[name="obstacle"]').should('be.visible').and('have.text', 'Select an obstacleFlatgroundLedgeRailStairsPool');
    cy.get('input[placeholder="Link to Tutorial"]').should("be.visible");
    cy.get('.submitTrick').contains("SEND IT").should("be.visible");
    cy.get('.card').should('have.length', 3);
    cy.get('.card').first().contains('treflip')
    cy.get('.card').last().contains("frontside 50-50, backside 180 out")
  })
  it("should hold the value in the form input when data is entered into the input and add a new trick to the page when the user clicks the SEND IT button", () => {
    cy.get('input[placeholder="Name of Trick"]').type("McTwist").should('have.value', 'McTwist')
    cy.get('input[placeholder="Link to Tutorial"]').type("Some Link").should('have.value', 'Some Link')
    cy.get('select[name="stance"]').select('Regular').should('have.value', 'Regular');
    cy.get('select[name="obstacle"]').select('Pool').should('have.value', 'Pool');
    cy.get('.submitTrick').click()
    cy.get('.card').last().contains("McTwist")
  })
})
