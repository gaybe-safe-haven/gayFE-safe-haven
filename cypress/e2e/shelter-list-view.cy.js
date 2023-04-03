describe("User Flow: As a user, I should be able to view a list of all of the submitted shelters", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters", {fixture: "../fixtures/shelters.json"})
    cy.visit("http://localhost:3000/list");
  });
  
  it("Should show a heading and shelter cards with name and validation icons in the main content", () => {
    cy.get("h2.page_h2Styling__9uXus").contains("Shelter List")
    cy.get("div.Card_listItemContainer__ZGNxn > a.Card_linkText__fH7R6").contains("Mock Shelter")
    cy.get("svg[alt='not validated']").should("be.visible")
    cy.get("div.Card_listItemContainer__ZGNxn > a.Card_linkText__fH7R6").contains("Montrose Grace Pl")
    cy.get('.page_main__ibFHK > :nth-child(2) > :nth-child(2)').invoke("text").should("eq", "Montrose Grace Pl")
    cy.get("svg[alt='validated shelter']").should("be.visible")
  })

  it("Should provide a link to a single shelter's display page", () => {
    cy.get("div.Card_listItemContainer__ZGNxn > a.Card_linkText__fH7R6").first().click()
    cy.go("back")
  })
  
  it("Should provide a link on every shelter's name", () => {
    cy.get("a.Card_linkText__fH7R6").should(($a) => {
      expect($a).to.have.length(6)
    })
  })
})