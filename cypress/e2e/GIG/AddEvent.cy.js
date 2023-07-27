import gigvars from "../../fixtures/gigvars.json"
describe('Event Management', () => {
    it("Verify able to navigatint Events setion ", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
        cy.wait(4000)
        
        cy.GoTOEventssection(gigvars.email,gigvars.Password)
       
      })
    
    it("Verify able to Accessing the event details", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
        cy.wait(4000)
        
        cy.AccessEvent(gigvars.email,gigvars.Password)
      })
      it("Verify able to Access the Add Event button ", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
        cy.wait(4000)
        
        cy.AddEventButton(gigvars.email,gigvars.Password)
      })
      it("Verify Brand Promoter rates error popup is dispying if user not defined bp rates  ", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
        cy.wait(4000)
        
        cy.BPrateserrorpopup(gigvars.email,gigvars.Password)
      })
      it("Verify able to adding Off premise event after adding BP Rates ", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
        cy.wait(4000)
        
        cy.AddOffPremiseevent(gigvars.email,gigvars.Password)
      })
     
      it.only("Verify able to edit event after adding BP Rates ", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
        cy.wait(4000)
        cy.GigLogin(gigvars.email,gigvars.Password)
        //cy.reload()
        
        cy.Editevent()
      })
})
    