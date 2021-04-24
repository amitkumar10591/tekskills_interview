describe("Test the login feature for UI:", function(){
    before(()=>{
        cy.visit(Cypress.env('baseUrl'))
    })

    it("Test validating the login page", function(){
        cy.get('[class="single-page-block-form ng-scope"]')
          .get('h3[class="text-center"]').contains('Login')
    })

    it("Test validating the signin", function(){
        cy.get('[id="loginSubmitButton"]')
          .get('[disabled="disabled"]')
    })

    it("Test wrong input", function(){
        cy.get('input[name=username]').type(Cypress.env('username'))
        cy.get('input[name=password]').type(Cypress.env('password'))
        cy.get('[class="qa-login--btn-sign_in btn btn-primary ladda-button"]').click()
        cy.get('[class="ng-scope"]').contains('Username and/or password invalid')
    })

    it("Verifying the Forgot Password link", function(){
        cy.get('a[title="Click here to reset your password"]').contains('Forgot Password?')
    })
})