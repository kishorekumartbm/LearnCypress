/// <reference types="cypress"/>


describe('launchNgxAppAndNavigate',()=>{
    it('navigateToTableAndClickEditForJhonAndUpdateAge',()=>{
       cy.visit('localhost:4200')
       cy.contains('Tables & Data').click()
       cy.contains('Smart Table').click()
       cy.get('[data-name="menu-2"]').click()
       cy.get('tbody').contains('tr','John').then(tablerow =>{
           cy.wrap(tablerow).find('.nb-edit').click()
           cy.wrap(tablerow).find('[placeholder="Age"]').clear()
           cy.wrap(tablerow).find('[placeholder="Age"]').type('30')
           cy.wrap(tablerow).find('.nb-checkmark').click()
           cy.wrap(tablerow).find('td').eq(6).should('have.text','30')
       })

    })
})