/// <reference types="cypress"/>


describe('launchtheDemoMouseActions',()=>{
        it('mouseoverclickandmouseover',()=>{
            cy.visit('https://demo.opencart.com/')
            cy.get('[name="search"]').type('phone')
            //cy.get('.input-group-btn').click()

            cy.get('.input-group-btn').trigger('click')

            cy.get(':nth-child(3) > .dropdown-toggle').trigger('mouseover')

            //cy.get('ul.nav li:nth-child():nth-child(3) > .dropdown-toggle').trigger('mouseover')

        })

        it('rightClick',()=>{
            cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
            cy.contains('right click me').rightclick()
            cy.get('.context-menu-icon-copy').click()
            cy.on('windows:alert',(str)=>{
                expect(str).to.equal('clicked: copy')
            })

        })

        it.only('doubleClick',()=>{
            cy.visit('http://testautomationpractice.blogspot.com')
            cy.contains('Copy Text').dblclick()
            //invoke the text method for field 2 validation

        })
})