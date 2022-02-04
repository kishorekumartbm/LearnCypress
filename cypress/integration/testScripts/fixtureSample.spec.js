/// <reference types="cypress"/>
const login = require('../../fixtures/user.json')
describe('fixturesample', ()=>{
    it('launchLoginHardcoding',()=>{
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
    })

    //Method using fixture
    it('launchLoginfromFixture',()=>{
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.fixture('user').then((login) =>{
            const usname = login.username
            const passwd = login.passd
            cy.get('#username').type(usname)
            cy.get('#password').type(passwd)
        })
        cy.get('.radius').click()
    })

    //Method directly accessing Json object
    it('launchLoginfromFixture',()=>{
        cy.visit('http://the-internet.herokuapp.com/login')
      //  cy.log(login.username)
        cy.get('#username').type(login.username)
        cy.get('#password').type(login.passd)
        cy.get('.radius').click()
    })


    //Method from command
    it('launchLoginfromFixture',()=>{
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.login('tomsmith','SuperSecretPassword!')
    })

//Method from command using file
    it.only('launchLoginfromFixture',()=>{
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.loginfromFile()
    })

})