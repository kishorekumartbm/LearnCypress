/// <reference types="cypress"/>


describe('launchtheInternet',()=>{
    it('handleALert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click()
        cy.on('windows:alert',(str)=>{
            expect(str).to.be.equal('Iam a JS Alert')
        })
    })

    it.only('handleALert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('windows.confirm',(str)=>{
            expect(str).to.be.equal('Iam a JS Confirm')
        })
        cy.on('window:confirm', () => false)
        //cy.get('.example').find('p').contains('You clicked: Cancel')
        cy.get('.example').find('p').should('contain','You clicked: Cancel')
        
        // cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on('windows.confirm',(str)=>{
            expect(str).to.be.equal('Iam a JS Confirm')
        })
        cy.on('window:confirm', () => fale)
        cy.get('.example').find('p').contains('You clicked: Cancel')
        //cy.contains('Result:')

    })
})