/// <reference types="cypress" />



describe('write file',()=>{
    it('write to a file',()=>{
        cy.writeFile('samplefiletowrite.txt','Hello and welcome')
    })

    it('read from file',()=>{
        cy.readFile('samplefiletowrite.txt').should('eq','Hello and welcome')
        cy.readFile('samplefiletowrite.txt').should('not.contain','boss')
        cy.readFile('samplefiletowrite.txt')
            .then((text) =>{
            cy.log(text.length)
        })
    })

    
    it('append file',()=>{
        cy.writeFile('samplefiletowrite.txt',' \n My Boss',{flag:'a+'})
    })
})