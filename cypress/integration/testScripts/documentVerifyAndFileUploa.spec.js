/// <reference types="cypress"/>

describe('verifythedocumnet', ()=>{
    it('validate the document contes', ()=>{
        cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')
        cy.document().its('contentType').should('eq','text/html')
        cy.document().should('have.property','charset').and('eq','utf-8')
    })

    it('FileUpload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('sample.txt')
        cy.get('#file-submit').click()
    })
})