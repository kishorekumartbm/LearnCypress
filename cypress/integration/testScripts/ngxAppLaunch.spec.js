/// <reference types="cypress"/>


describe('launchNgxAppAndNavigate',()=>{
    it('navigateToFormHorizontalForm',()=>{
        cy.visit('localhost:4200')
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()
        cy.get('[data-name="menu-2"]').click()
        cy.contains('Sign in')
        cy.contains('[status="warning"]','Sign in')

        //Locate element and traverse through Parent
        cy.get('#inputEmail3')
          .parents('form')  
          .find('button')
          .should('contain','Sign in')
          .parents('form')
          .find('nb-checkbox').click()

        //Locate element from Parent and identify the email label
        cy.contains('nb-card','Horizontal form').find('[for="inputEmail3"]').should('contain','Email')
        //Locate element from Parent and identify the password label
        cy.contains('nb-card','Horizontal form').find('[for="inputPassword3"]').should('contain','Password')

        //Find the parent and store in call back, using Jquery and get the Text and assert
        cy.contains('nb-card','Horizontal form').then(horzForm =>{
            //Direct assert with out storing in variable
            expect('Email').to.be.equals(horzForm.find('[for="inputEmail3"]').text())
            expect('Password').to.be.equals(horzForm.find('[for="inputPassword3"]').text())
            
            //aassert after storing in variable
            const emailLbl = horzForm.find('[for="inputEmail3"]').text()
            const  pwdLbl   = horzForm.find('[for="inputPassword3"]').text()
            expect(emailLbl).to.be.equals('Email')
            expect(pwdLbl).to.be.equals('Password')
        })
    })
})