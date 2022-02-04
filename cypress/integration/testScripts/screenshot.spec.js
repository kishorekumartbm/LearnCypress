/// <reference types='cypress' />

describe('screenshotsamples',()=>{
    it.skip('fullpagescreenshot',()=>{
        cy.visit('localhost:4200')
        cy.screenshot({capture:'fullPage'})  
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()
        cy.get('[data-name="menu-2"]').click()    
        cy.screenshot({capture:'fullPage'})  
        
        cy.screenshot('NametheSS',{capture:'fullPage'})
    })

    it.skip('onlyElementscreenshot',()=>{
        cy.visit('localhost:4200')
        cy.get('[data-name="menu-2"]').screenshot({capture:'fullPage'})     
        cy.get('[data-name="menu-2"]').screenshot('Nametheelement',{capture:'fullPage'})        
    })

    it('scroolandScreenshot',()=>{
        cy.visit('localhost:4200')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()
        cy.get('[data-name="menu-2"]').click()     
        cy.contains('nb-card','Horizontal form').scrollIntoView()
        cy.screenshot('HorzitontalForm')    

        cy.get('.form-inline input[placeholder="Jane Doe"]').scrollIntoView()
        cy.screenshot('gridform') 
        
        
    })
})
