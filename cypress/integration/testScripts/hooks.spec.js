/// <reference types="cypress"/>

describe('hooksexample', ()=>{
    before('This is before', ()=>{
        cy.log('This is before all the tests')
    })
    beforeEach('This is beforeEach', ()=>{
        cy.log('This is before every tests')
    })

    it('FirstTest',()=>{
        cy.log('First Test')
    })

    it('SecondTest',()=>{
        cy.log('Second Test')
    })

    it.skip('ThirdTest',()=>{
        cy.log('Third Test')
    })
    
    afterEach('This is afterEach', ()=>{
        cy.log('This is after each tests')
    })

    after('This is before', ()=>{
        cy.log('This is after all the tests')
    })
})
