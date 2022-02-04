/// <reference types="cypress"/>

describe('fileupload',() =>{
    it('fileupload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        //cy.xpath('//*[@id="username"]').type('tomsmith')
        cy.get('#file-upload').selectFile('sample.txt')
        cy.get('#file-submit').click()
    })
})