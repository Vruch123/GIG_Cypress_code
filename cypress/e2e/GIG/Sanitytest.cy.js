import gigvars from "../../fixtures/gigvars.json"



describe('Sanity test of Settings,Partner and Event createion ', () => {

    
    it("verifying functionality of event creation ", () =>{
      cy.visit(gigvars.url)
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.AddMarketDynamicName(gigvars.email,gigvars.Password)
      cy.GigLogin(gigvars.email,gigvars.Password)
        //cy.reload()
        
     cy.Editevent()

    })
})