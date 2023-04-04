describe("User Flow: As a user, when I select one of the shelters, I will be taken to a page that displays all the relevant details about that shelter", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://gaybe-safe-haven.herokuapp.com/api/v1/shelters", {fixture: "../fixtures/shelters.json"})
    cy.visit("http://localhost:3000/list");
  });

  it("Should take the user to a single shelter display when the user clicks on a shelter link from the list", () => {
    cy.get(".page_main__ibFHK > :nth-child(2) > :nth-child(1)").first().click()
    cy.go("forward")
  })
})

