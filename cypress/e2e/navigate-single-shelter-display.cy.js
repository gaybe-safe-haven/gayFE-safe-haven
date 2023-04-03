describe("User Flow: As a user, when I select one of the shelters, I will be taken to a page that displays all the relevant details about that shelter", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters", {fixture: "../fixtures/shelters.json"})
    cy.visit("http://localhost:3000/list");
  });

  it("Should take the user to a single shelter display when the user clicks on a shelter link from the list", () => {
    cy.get("div#shelterCard > a#shelterLink").first().click()
    cy.go("forward")
  })
})