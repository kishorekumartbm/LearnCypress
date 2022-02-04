/// <reference types="cypress"/>


describe('launchNgxAppAndNavigate',()=>{
    it('navigateToFormHorizontalForm',()=>{
        cy.visit('localhost:4200')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()
        cy.get('[data-name="menu-2"]').click()
       
        
       cy.contains('nb-card','Horizontal form')
         .find('nb-checkbox')
         .click()
         .find('.custom-checkbox')
         .invoke('attr','class')
         .should('contain','checked')

    })
})