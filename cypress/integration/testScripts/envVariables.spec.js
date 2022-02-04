/// <reference types="cypress"/>

describe('accessingenvvariables',()=>{
    it('addtwonos',()=>{
        cy.log(Cypress.env('no1'))
        cy.log(Cypress.env('no2'))
        cy.log(Cypress.env('no1')+Cypress.env('no2')+parseInt(Cypress.env('no3')))

    })
})
