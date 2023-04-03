describe("User Flow: As a user, I should be able to submit a form on the shelter details page to add my ratings/opinions to a shelter", () => {
  beforeEach(() => {
    // cy.intercept("GET", "https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters/1", {fixture: "../fixtures/shelter.json"})
    //looks like our data is still hard-coded in rate form?
    cy.visit("http://localhost:3000/list/1");
  });

  it("Should display shelter details including the shelter name, address, website, phone number, and validation info", () => {
    cy.get("section#shelterData > h2").should("be.visible")
    cy.get("section#shelterData > div > p").should("be.visible")
    cy.get("div#verified").contains("the contact information for this shelter was submitted by a community member and has not been verified")
  })

  it("Should display community review data as well as icons and ratings explanation", () => {
    cy.get("section#communityReviews > h2").contains("Community Reviews")
    cy.get("section#communityReviews > h2").should("be.visible")

    cy.get("img#flag").should("be.visible")
    .should("have.attr", "src")
    .should("eq", "/flag.png")

    cy.get("img#home").should("be.visible")
    .should("have.attr", "src")
    .should("eq", "/home.png")

    cy.get("img#mop").should("be.visible")
    .should("have.attr", "src")
    .should("eq", "/mop.png")
  })

  it("Should provide a form to let a user submit shelter ratings based on their experience", () => {

  })
})

