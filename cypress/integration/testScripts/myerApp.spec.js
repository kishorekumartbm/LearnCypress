/// <reference types="cypress"/>


describe('launchNgxAppAndNavigate',()=>{
    it('navigateToFormHorizontalForm',()=>{
        cy.visit('localhost:4200')
        const varlog='Akveo'
        cy.get('.created-by b a').should('have.text',varlog)
        cy.log('verifed the text',varlog)

        cy.contains(varlog)
        cy.log('verifed the text',varlog)
            
        cy.get('.created-by b a').should( ({$div}) =>{
            const text = $div.text()
            expect(varlog).equals(text)
        })
    })
})