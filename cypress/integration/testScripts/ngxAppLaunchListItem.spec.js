/// <reference types="cypress"/>


describe('launchNgxApp',()=>{
    it('Handling Dropdown',()=>{
        cy.visit('localhost:4200')
        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()

        //method2
        cy.get('nav nb-select').then(dropdwn=>{
            cy.wrap(dropdwn).click()
            cy.get('.options-list nb-option').each((list,index) => {
                const itemText=list.text().trim()
                cy.wrap(list).click()
                cy.wrap(dropdwn).should('contain',itemText)
                if(index <3){
                    cy.wrap(dropdwn).click()
                }

            })
        })
    })
})