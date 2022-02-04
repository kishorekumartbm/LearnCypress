/// <reference types="cypress"/>


describe('launchtheexampleViewport',()=>{
        it('launchtheexampleViewport',()=>{
            cy.viewport(1280,720)
            cy.visit('https://www.example.com/')
            cy.wait(200)

        })

        it('launchtheexampleViewport1080',()=>{
            cy.viewport(1980,1080)
            cy.visit('https://www.example.com/')
            cy.wait(200)
        
        })

        it('ipad2',()=>{
            cy.viewport('ipad-2')
            cy.visit('https://www.example.com/')
            cy.wait(200)
        
        })
})