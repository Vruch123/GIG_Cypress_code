import gigvars from "../../fixtures/gigvars.json"
describe('Agencylogin functionality verification ', () => {

    it('verifying login functionaly with valid credential', () => {

       cy.visit(gigvars.url)
       Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
       cy.wait(4000)
       //using custom command giglogins created and givars is using for call varibles infixtures
       cy.giglogins(gigvars.email,gigvars.Password)
       
    })
    
    it("verifying functionality of Market creation ", () =>{
      cy.visit(gigvars.url)
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.AddMarket(gigvars.email,gigvars.Password)

    })

    it.only("verifying Market Staus toogle button functionly", () =>{
      cy.visit(gigvars.url)
      Cypress.on('uncaught:exception', (err, runnable) => {
       // returning false here prevents Cypress from
       // failing the test
       return false
      })
      cy.GigLogin(gigvars.email,gigvars.Password)
      cy.ChangeMarketStatusToActive()
    })
  })