describe("User Flow: As a user, I should be able to submit a form on the shelter details page to add my ratings/opinions to a shelter", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters/1", {fixture: "../fixtures/shelter.json"})
    cy.visit("http://localhost:3000/list/1");
  });

  it("Should display shelter details including the shelter name, address, website, phone number, and validation info", () => {
    cy.get("h1").contains("Thive Youth Center")
  })

  it("Should display community review data as well as icons and ratings explanation", () => {

  })

  it("Should provide a form to let a user submit shelter ratings based on their experience", () => {

  })
})

