/// <reference types="cypress"/>


describe('launchNgxAppAndNavigate',()=>{
    it('navigateToFormHorizontalForm',()=>{
        cy.visit('localhost:4200')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()
        cy.get('[data-name="menu-2"]').click()
        cy.contains('nb-card','Colored Tooltips')
            .contains('Default').click()
            cy.get('nb-tooltip').should('contain','This is a toolti')
        
    })
})