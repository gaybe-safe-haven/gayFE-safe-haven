describe("User Flow: As a user, I should be able to view a list of all of the submitted shelters", () => {
  it("Should navigate from the landing page to a list page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button#seeListBtn").contains("list").click()
    .url().should("eq", "http://localhost:3000/list")
  })

  it("Should show a heading and shelter cards with name and validation icons in the main content", () => {
    cy.visit("http://localhost:3000/list");
    cy.get("h2#shelterList").contains("Shelter List")
  })
})