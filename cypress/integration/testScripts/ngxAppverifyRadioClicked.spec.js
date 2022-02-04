/// <reference types="cypress"/>



describe('launchNgxAppAndNavigate',()=>{
    it('navigateToFormHorizontalForm',()=>{
        cy.visit('localhost:4200')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()
        cy.get('[data-name="menu-2"]').click()
        
       cy.contains('nb-card','Using the Grid')
         .find('[type="Radio"]').then(radiobtn=>{
         cy.wrap(radiobtn)    
           .first()
           //.check()
           .check({force:true})
           .should('be.checked')

          cy.wrap(radiobtn) 
            .eq(1)
          .check({force:true})
          .should('be.checked')

          cy.wrap(radiobtn) 
            .eq(2)
          .should('be.disabled')

         })
         

    })
})