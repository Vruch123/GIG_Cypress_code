import gigvars from "../../fixtures/gigvars.json"



describe('Market Settings ', () => {

    
    it("verifying functionality of Market creation ", () =>{
      cy.visit(gigvars.url)
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.AddMarket(gigvars.email,gigvars.Password)

    })

    
    it("Verifying Delete button functionaly of Market ", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })
        cy.GigLogin(gigvars.email,gigvars.Password)
        cy.DeleteMarket()
      })

    it("verifying Market Staus toggle button functionly", () =>{
      cy.visit(gigvars.url)
      Cypress.on('uncaught:exception', (err, runnable) => {
       // returning false here prevents Cypress from
       // failing the test
       return false
      })
      cy.GigLogin(gigvars.email,gigvars.Password)
      cy.ChangeMarketStatusToActive()
    })

    it("Verifying Edit button functionaly of Market", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })
        cy.GigLogin(gigvars.email,gigvars.Password)
        cy.EditMarket()
      })
      it.only("verifying functionality of Market and Partner creation with Dynamic Name of Market", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })
        cy.AddMarketDynamicName(gigvars.email,gigvars.Password)
  
      })
  
  })