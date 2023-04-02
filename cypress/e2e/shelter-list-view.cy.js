describe("User Flow: As a user, I should be able to view a list of all of the submitted shelters", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters", {fixture: "../fixtures/shelters.json"})
    cy.visit("http://localhost:3000/list");
  });
  
  it("Should show an error message if page fails to load main section", () => {

  }) 
  
  it("Should show a heading and shelter cards with name and validation icons in the main content", () => {
    // cy.get("h2#shelterList").contains("Shelter List")
  })

  it("Should show a shelter list fetched from the API", () => {
    // cy.request("https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters")
    // cy.fixture("shelters.json").then((shelters) => {
    //   cy.intercept("Get", "https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters", { body: shelters }).as("shelters")
    // })


    // cy.get("div#shelterCard")
    //   .should("contain", "Link")
  })

})