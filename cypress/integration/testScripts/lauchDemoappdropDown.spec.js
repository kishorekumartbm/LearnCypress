/// <reference types="cypress"/>


describe('launchDemoAutommationTesting',()=>{
    it('work with dropdown',()=>{
        cy.visit('http://demo.automationtesting.in')
        cy.get('a[href="Register.html"]').click()
        cy.get('#skills').select('Andriod')
        cy.get('#skills').should('have.value','Android')

        cy.get('span[role="combobox]"').click()
        cy.get('.select2-search-field').type('Ind')
        cy.get('.select2-search-field').type('{enter}')
        cy.get('span[role="combobox]"').should('have.text','India')
    })
})