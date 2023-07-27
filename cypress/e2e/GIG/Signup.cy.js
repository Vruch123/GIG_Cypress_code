import gigvars from "../../fixtures/gigvars.json"
describe('Agency Signup ', () => {

    it('verifying Signup functionaly with valid credential', () => {
        cy.visit(gigvars.url)
       Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
       cy.wait(4000)
       //using custom command giglogins created and givars is using for call varibles infixtures
       cy.Signup(gigvars.fname,gigvars.lname)
       
    })
})