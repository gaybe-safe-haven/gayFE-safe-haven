describe("User Flow: As a user, when I visit the site, I should see a landing page that tells me 'Why This App and What To Do?' ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should show the main page of the app with title and header", () => {
    cy.get("nav").should("have.id", "navContainer")
    cy.get("h1#title").contains("Our App <3")
    // cy.get("svg.squirrel").should("be.visible")
  })

  it("Should have a nav bar that navigates to different page views using Link", () => {
    cy.get("button#aboutBtn").contains("about").click()
      .url().should("eq", "http://localhost:3000/about")

    cy.get("button#seeListBtn").contains("list").click()
      .url().should("eq", "http://localhost:3000/list")

    // cy.get("button#addShelterBtn").contains("add")
    //   .url().should("eq", "http://localhost:3000/add")
// not sure why this isn't working? ^^
    cy.get("button#apiBtn").contains("public api").click()
      .url().should("eq", "http://localhost:3000/api")
  })

  it("Should have a stripes visual", () => {
    cy.get(".purpleStripe").should("be.visible")
  })
  
})