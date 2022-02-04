/// <reference types="cypress"/>


describe('launchradogado',()=>{
    it('navigateToFormHorizontalForm',()=>{
        cy.visit('https://radogado.github.io/shadow-dom-demo/')
        cy.get('#app').shadow().find('#container')
        
        //method1
        cy.get('#app').shadow().find('#container').then((label) =>{
            const strvalue=label.text()
            cy.log('Dom Label ...'+strvalue)
        })
        

        //Method2
        cy.get('#app').shadow().find('#container')
        .invoke('text').as('textVal')
        cy.get('@texVal').then( str => {
           cy.log('Using Alias....'+str)
        })
    })
})