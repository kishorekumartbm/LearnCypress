/// <reference types="cypress"/>

//// make sure to updat the base url in cypress.json
////  "baseUrl":"http://localhost:3000",

describe('boardsApplicaionSample',()=>{
    it.only('Intercept',()=>{
        cy.intercept({
            method:'GET',
            url:'/api/boards'
            }).as('boards')
            cy.visit('/')
            cy.wait('@boards')
                .its('response.statusCode')
                .should('eq',200)
            cy.get('[data-cy=board-item]').should('have.length',4)

    })
})