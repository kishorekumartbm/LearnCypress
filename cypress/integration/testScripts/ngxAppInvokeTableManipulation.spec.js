/// <reference types="cypress"/>


describe('launchNgxAppAndNavigate',()=>{
    it('navigateToTableAndClickEditForJhon',()=>{
       cy.visit('localhost:4200')
       cy.contains('Tables & Data').click()
       cy.contains('Smart Table').click()
       cy.get('[data-name="menu-2"]').click()
       cy.get('tbody').contains('tr','John').then(tablerow =>{
           cy.wrap(tablerow).find('.nb-edit').click()
       })

    })
})