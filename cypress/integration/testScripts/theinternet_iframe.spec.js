/// <reference types="cypress"/>


describe('launchtheInternet',()=>{
    it('accessIframe',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('mce_0_ifr').within(function (myFrame){
            const frame = myFrame.contents().find('#tinymce')
            cy.wrap(frame).clear().type('My name........')
        })
    })
})