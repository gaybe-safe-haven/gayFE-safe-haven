describe("User Flow: As a user, I should be able to view a list of all of the submitted shelters", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters", {fixture: "../fixtures/shelters.json"})
    cy.visit("http://localhost:3000/list");
  });
  
  it("Should show a heading and shelter cards with name and validation icons in the main content", () => {
    cy.get("h2#shelterList").contains("Shelter List")
    cy.get("div#shelterCard").contains("Mock Shelter")
    cy.get("svg#validationIcon").should("be.visible")
    cy.get("svg[alt='not validated']").should("be.visible")
    cy.get("div#shelterCard").contains("Montrose Grace Pl")
    cy.get("svg[alt='validated shelter']").should("be.visible")
  })

  it("Should provide a link to a single shelter's display page", () => {
    cy.get("div#shelterCard > a#shelterLink").first().click()
  })

})