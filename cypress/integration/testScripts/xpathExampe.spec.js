/// <reference types="cypress"/>

describe('xpathExample',() =>{
    it('xpathExample',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.xpath('//*[@id="username"]').type('tomsmith')
    })
})