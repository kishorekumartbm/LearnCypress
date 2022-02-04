/// <reference types="cypress"/>


describe('launchBooksAndCount',()=>{
    it('find the no of books under travel',()=>{
        cy.visit('https://books.toscrape.com/index.html')
        cy.contains('Travel').click()
        cy.get('.image_container').its('length').should('eq',11)
    })
})