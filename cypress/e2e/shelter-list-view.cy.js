describe("User Flow: As a user, I should be able to view a list of all of the submitted shelters", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/list");
  });

  it( "Should navigate from the landing page to a list page", () => {
    cy.get("button#seeListBtn").contains("list").click()
    .url().should("eq", "http://localhost:3000/list")
  })
})