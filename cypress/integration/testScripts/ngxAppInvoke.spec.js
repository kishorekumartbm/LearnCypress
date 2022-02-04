/// <reference types="cypress"/>


describe('launchNgxAppAndNavigate',()=>{
    it('navigateToFormHorizontalForm',()=>{
        cy.visit('localhost:4200')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()
        cy.get('[data-name="menu-2"]').click()
        
         cy.get('[for="inputEmail3"]').invoke('text').then(text=>{
            expect(text).to.be.equals('Email')
         })
       
    })
})