describe("User Flow: As a user, when I visit the site, I should see a landing page that tells me 'Why This App and What To Do?' ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should show the main page of the app with title and header", () => {
    cy.get("nav").should("have.class", "nav_navContainer__mu3F6")
    cy.get("h1.page_title__yhPp_").contains("S.A.F.E.R. Kids")
  })

  it("Should have a nav bar that navigates to different page views using Link", () => {
    cy.get('button[alt="about"]')
      .should("be.visible")
    cy.get('[href="/about"] > .nav_linkButton__zOSWr').contains("about").click()
      .url().should("eq", "http://localhost:3000/about")

    cy.get('button[alt="list"]')
      .should("be.visible")
    cy.get('[href="/list"] > .nav_linkButton__zOSWr').contains("list").click()
      .url().should("eq", "http://localhost:3000/list")

    cy.get('button[alt="add a shelter"]')
      .should("be.visible")
    cy.get("button.nav_linkButton__zOSWr").contains("add a shelter").click()
      .url().should("eq", "http://localhost:3000/add-shelter")

    cy.get('button[alt="public api"]')
      .should("be.visible")
    // cy.get("button.nav_linkButton__zOSWr").contains("public api").click()
    //   .url().should("eq", "http://localhost:3000/api")
  })

  it("Should display images and text in the main section", () => {
    cy.get("p.page_mainPagePTag1__U48Lw").invoke("text").should("eq", "LGBTQ+ youth are 120% more likely to experience homelessness.")
    cy.get("img.images_makeupTeensImage__3NYpt").should("be.visible")
    cy.get('img[alt="makeup teens"]').should("have.attr", "src")
    cy.get("p.page_mainPagePTag2__N2K6o").invoke("text").should("eq", "But not all shelters are safe for queer and trans folks.")
    cy.get("img.images_facepaintTeen__DS4MU").should("be.visible")
    cy.get('img[alt="face paint teen"').should("have.attr", "src")
    cy.get("p.page_mainPagePTag3__lXJWu").invoke("text").should("eq", "We're asking you to help us track the ones that are.")
    //leaving this note here: Cypress seems to prefer "We're" and not the literal html "We&apos;re"
  })

  it("Should have a stripes visual at the foot of the view screen", () => {
    cy.get(".purpleStripe").should("be.visible")
  })
})
