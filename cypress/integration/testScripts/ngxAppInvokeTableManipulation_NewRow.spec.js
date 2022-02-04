/// <reference types="cypress"/>


describe('launchNgxAppAndNavigate',()=>{
    it('navigateToTableAndAddNewRow',()=>{
       cy.visit('localhost:4200')
       cy.contains('Tables & Data').click()
       cy.contains('Smart Table').click()
       cy.get('[data-name="menu-2"]').click()
       //click on the plus button
       cy.get('thead').find('.nb-plus').click()

       //Method1
      // cy.get('thead').find('tr').eq(2).then(tablerow =>{
        // //    cy.wrap(tablerow).find('[placeholder="First Name"]').type("First  Name")
        // //    cy.wrap(tablerow).find('[placeholder="Last Name"]').type("Last  Name")
        // //    cy.wrap(tablerow).find('.nb-checkmark').click()
     //  })
        
     //Method2 to enter the details
       cy.get('thead').find('tr').eq(2).then(tablerow =>{
        cy.wrap(tablerow).find('input').eq(0).type('5')
        cy.wrap(tablerow).find('input').eq(1).type('firstNAeeme')
        cy.wrap(tablerow).find('input').eq(2).type('lastNAeeme')
        cy.wrap(tablerow).find('input').eq(3).type('userNAeeme')
        cy.wrap(tablerow).find('input').eq(4).type('email@email.com')
        cy.wrap(tablerow).find('input').eq(5).type('30')
        cy.wrap(tablerow).find('a').eq(0).click()
       })

       //Valiate the details 
       cy.get('tbody').find('tr').eq(0).then(tablerow1 =>{
        cy.wrap(tablerow1).find('td').eq(1).should('have.text','5')
        cy.wrap(tablerow1).find('td').eq(2).should('have.text','firstNAeeme')
        cy.wrap(tablerow1).find('td').eq(3).should('have.text','lastNAeeme')
        cy.wrap(tablerow1).find('td').eq(4).should('have.text','userNAeeme')
        cy.wrap(tablerow1).find('td').eq(5).should('have.text','email@email.com')
        cy.wrap(tablerow1).find('td').eq(6).should('have.text','30')
       })
    })
})