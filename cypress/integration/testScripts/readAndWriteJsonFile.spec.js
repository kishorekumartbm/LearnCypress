/// <reference types="cypress"/>


//Read the file
describe('writeJson',()=>{
    it('launchtheexampleViewport',()=>{
       cy.readFile('userData.json')
        .its('username')
        .should('eq','tomsmith')
    })

//Write the file - overwrite
    it.only('launchtheexampleViewport',()=>{
        cy.writeFile('userData.json',
        {myName:'Test',email:'emal.com'})

        cy.readFile('userData.json')
        .its('myName')
        .should('eq','Test')
     })
 

})    