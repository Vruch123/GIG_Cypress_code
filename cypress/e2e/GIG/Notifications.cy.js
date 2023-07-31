import gigvars from "../../fixtures/gigvars.json"
describe('Notification section', () => {
    it("Verify able to navigatint to Notification section", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
        cy.wait(4000)
        cy.Mytasks(gigvars.email,gigvars.Password)
        cy.GoToNotifiations()
      })
    
    it("Verify able to access the Find promoter section", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
        cy.wait(4000)
        cy.Mytasks(gigvars.email,gigvars.Password)
        cy.AccessEvetdetalsFromNotification()
        cy.Findpromoter()
      })
  
    it("Verify able to access the Find promoter section", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
        cy.wait(4000)
        cy.Mytasks(gigvars.email,gigvars.Password)
        cy.AccessEvetdetalsFromNotification()
        cy.Appliedpromoter()
      })
      it("Verify able to access the Invited promoter section", () =>{
        cy.visit(gigvars.url)
        Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
        cy.wait(4000)
        cy.Mytasks(gigvars.email,gigvars.Password)
        cy.AccessEvetdetalsFromNotification()
        cy.Invitedpromoter()
      })
    })
