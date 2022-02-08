/// <reference types="cypress"/>
describe('demoapp',()=>{
    it('trial',()=>{
        //homepage
        cy.visit('https://demo.opencart.com/')
        cy.get('[name="search"]').should('be.visible')
        cy.get('[name="search"]').type('phone')
        cy.get('span [type="button"]').should('be.visible')
        cy.get('span [type="button"]').click()

       //search restuls page
       cy.get('#content h1').contains('Search - phone')
       
       //select the dropdown options
       cy.get('[name="category_id"]').select('Desktops')
 
        
        // //find the no of elements in the dropdown
        // cy.get('[name="category_id"]').then((val)=>{
        //     cy.wrap(val).find('option').its('length').should('eq',39)
        // })

        // //Verfies the no of options available its values
        // const pageOptions =  ['15','25','50','75','100']
        // cy.get('#input-limit option')
        //  .then(($options) =>{
        //     return Cypress._.map($options, ($option) => $option.innerText)
        //     })
        //  .should('deep.equal', pageOptions)


        // const proName=""
        cy.get('.caption h4 a').then(($text) =>{
            const proName=$text.text()
            cy.log('name of the product '.concat(proName))
            cy.get('.image a').click()
            cy.get('.breadcrumb :nth-child(3)').should('contain',proName)
        })

        //Product page
        cy.get('#button-cart').click()
        cy.get('.alert.alert-success.alert-dismissible').should('contain','Success: You have added iPhone to your shopping cart!')
        cy.get('li h2').then(($prodval)=>{
            const prodvalwithD =$prodval.text()
            cy.get('#cart-total').should('have.contain.text',prodvalwithD)
        })

        cy.get('#cart button').click()
        cy.get('strong .fa.fa-shopping-cart').click()
       
    
    })
})
