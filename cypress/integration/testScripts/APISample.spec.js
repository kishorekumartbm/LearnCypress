/// <reference types="cypress"/>

describe('Request-Sample',()=>{
    const baseUrl ='http://jsonplaceholder.typicode.com'
    it('Get Sample1',()=>{
        cy.request(baseUrl.concat('/users')).as('userResponse')
        cy.get('@userResponse').its('status').should('equals',200)
    })

    it('Get Sample2',()=>{
        cy.request(baseUrl.concat('/users')).as('userResponse')
        cy.get('@userResponse').its('status').should('equals',200)
        cy.get('@userResponse')
            .its('headers')
            .its('content-type')
            .should('include','application/json; charset=utf-8')
    })

    it('GET-Sample',()=>{
        cy.request('GET','https://reqres.in/api/users').then((response) =>{
        const name = response.body.data[0].first_name
        cy.log(name)
        expect(name).equals('George')
        })
    })

    it('POST-Sample',()=>{
        var userreg = {
            name:'mynme',
            job:'job1'
        }
        cy.request('POST','https://reqres.in/api/users',userreg).then((response) =>{
        const statuscode = response.status
        cy.log(statuscode)
        cy.log('new id ',response.body.id)
        cy.log('given name',response.body.name)
        cy.log('given jab',response.body.job)
        })
    })

    it('POST-Sample-1',()=>{
        var userreg = {
            name:'mynme',
            job:'job1'
        }
        cy.request('POST','https://reqres.in/api/users',userreg)
            .its('body')
            .should('include',{name : 'mynme' })
    })

    it('PUt-Sample',()=>{
        var userreg = {
            name:'mynme',
            job:'job1'
        }
        cy.request('PUT','https://reqres.in/api/users',userreg).then((response) =>{
           expect(response.status).equal(200)
           expect(response.body.name).equal(userreg.name)
           expect(response.body.job).equal(userreg.job)
        })  
    })

    it.only('Delete-Sample-1',()=>{
        cy.request('DELETE','https://reqres.in/api/users/2').then((response) =>{
            expect(response.status).equal(204)
        })
            
    })
})

