/// <reference types="cypress"/>

//// make sure to updat the base url in cypress.json
////  "baseUrl":"http://localhost:3000",

describe('boardsApplicaionSample',()=>{
    //  var baseUrl ='http://localhost:3000'
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        cy.request({
            method:'POST',
            url:'api/reset'
        })
    })

    it('create a new boards',()=>{
        cy.visit('/')
        cy.request({
            method:'POST',
            url:'api/boards',
            body:{
                'name':'create new aaaboard'
            }
        })
    })


    it('update board name',()=>{
        //create the new record
        cy.visit('/')
        cy.request({
            method:'POST',
            url:'api/boards',
            body:{
                'name':'create new aaaboard for update'
            }
        }).then((response) =>{
        const recordid = response.body.id
        cy.log(recordid)

        //update the created record
        cy.visit('/')
         cy.request({
             method:'PATCH',
             url:'api/boards/'.concat(recordid),
             body:{
                 'name':'create new aard'
             }
         })
        })
         
    })


    it('delete board name',()=>{
        //create the new record
        cy.visit('/')
        cy.request({
            method:'POST',
            url:'api/boards',
            body:{
                'name':'create new aaaboard before delete'
            }
        }).then((response) =>{
        const recordid = response.body.id
        cy.log(recordid)

        //delete the created record
        cy.visit('/')
         cy.request({
             method:'DELETE',
             url:'api/boards/'.concat(recordid),
             body:{
                 'name':'create new aard'
             }
         })
        })
    })

    it.only('Intercept',()=>{
        cy.visit('/')
        cy.request({method:'POST',url:'api/boards',body:{'name':'create new aaaboard'}})
        cy.request({method:'POST',url:'api/boards',body:{'name':'create new aaaboard1'}})
        cy.request({method:'POST',url:'api/boards',body:{'name':'create new aaaboard2'}})
        cy.request({method:'POST',url:'api/boards',body:{'name':'create new aaaboard3'}})

        cy.intercept({
            method:'GET',
            url:'/api/boards'
            }).as('boards')
            cy.visit('/')
            cy.wait('@boards')
                .its('response.statuscode')
                .should('eq',200)
            cy.get('[data-cy=board-item]').should('have.length',4)

    })
})