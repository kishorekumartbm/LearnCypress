describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://www.amazon.in')
    })
    it('displays two todo items by default', () => {
        cy.get('#twotabsearchtextbox').click()
        cy.get('#twotabsearchtextbox').type('active4')
        cy.get('#nav-search-submit-button').click()
        
      })
    
  })
  