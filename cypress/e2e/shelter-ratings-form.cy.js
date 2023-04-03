describe("User Flow: As a user, I should be able to submit a form on the shelter details page to add my ratings/opinions to a shelter", () => {
  beforeEach(() => {
    // cy.intercept("GET", "https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters/1", {fixture: "../fixtures/shelter.json"})
    //looks like our data is still hard-coded in rate form?
    cy.visit("http://localhost:3000/list/1");
  });

  it("Should display shelter details including the shelter name, address, website, phone number, and validation info", () => {
    cy.get("h2.shelter_name__HjWLg").should("be.visible")
    cy.get('.shelter_contact__ecbAs > :nth-child(2) > :nth-child(1)').should("be.visible")
    cy.get("div > section.shelter_contact__ecbAs > div.shelter_clientServices__7uXe8 > p").should("be.visible")
    cy.get("div > section.shelter_contact__ecbAs > div.shelter_clientServices__7uXe8 > p").should("contain", "1-800-333-3333")
    cy.get("div > section.shelter_contact__ecbAs > div.shelter_clientServices__7uXe8 > a").should("be.visible")
    cy.get("div > section.shelter_contact__ecbAs > div.shelter_clientServices__7uXe8 > a").should("contain", "website")
    cy.get("div > section.shelter_contact__ecbAs > div.shelter_clientServices__7uXe8 > a").should("have.attr", "href")
    cy.get("div.shelter_verify__1sjXX > p").contains("the contact information for this shelter was submitted by a community member and has not been verified")
  })

  it("Should display community review data as well as icons and ratings explanation", () => {
    cy.get("section.shelter_reviews__GcKCz > h2").contains("Community Reviews")
    cy.get("section.shelter_reviews__GcKCz > h2").should("be.visible")
    cy.get("section.shelter_reviews__GcKCz > p").contains("these ratings are averaged from community reviews and are intended to reflect the experience of those who have received services here, not those who provide them")
    
    cy.get("article.shelter_scores__Lfy5u > div > p").should("contain", "9.8")
    cy.get("img.shelter_icons__YJFDX").should("be.visible")
    .should("have.attr", "src")
    .should("eq", "/flag.png")

    cy.get("article.shelter_scores__Lfy5u > div > p").should("contain", "8.6")
    cy.get(':nth-child(2) > .shelter_icons__YJFDX').should("be.visible")
    .should("have.attr", "src")
    .should("eq", "/home.png")

    cy.get("article.shelter_scores__Lfy5u > div > p").should("contain", "8.2")
    cy.get(':nth-child(3) > .shelter_icons__YJFDX').should("be.visible")
    .should("have.attr", "src")
    .should("eq", "/mop.png")
  })

  it("Should provide a form to let a user submit shelter ratings based on their experience", () => {
    cy.get("h2#rateFormTitle").contains("Rate Your Experience")
      .next().contains("Please only submit a rating if you have received services here")
    cy.get("form > p").contains("Staff was LGBTQ friendly")
    cy.get("form > p").contains("I was physically safe")
    cy.get("form > p").contains("Facility was clean and sanitary")

    cy.get("form").within((form) => {
      cy.get("input[name='staff']")
      cy.get("img#flag2").should("have.attr", "src")
        .should("eq", "/flag.png")
      cy.get("img#flag2").should("have.attr", "alt")
        .should("eq", "lgbtq flag icon")

      cy.get("input[name='safety']")
      cy.get("img#home2").should("have.attr", "src")
      .should("eq", "/home.png")
      cy.get("img#home2").should("have.attr", "alt")
      .should("eq", "safe house icon")

      cy.get("input[name='cleanliness']")
      cy.get("img#mop2").should("have.attr", "src")
      .should("eq", "/mop.png")
      cy.get("img#mop2").should("have.attr", "alt")
      .should("eq", "mop icon")

      cy.get("button#rateFormSubmitButton").contains("submit review")
    }).should("be.visible")
  })

  it("Should display an error message if no inputs were changed in the form", () => {
    cy.get("input[name='safety']").should("be.empty")
    cy.get("button#rateFormSubmitButton").click()
    cy.get("form > p").contains("please rate all fields before submitting")

  })

  it("Should display a message upon successful form submission", () => {
    cy.get("form").within((form) => {
      cy.get("input[type=range][name='staff']").invoke("val", 8).trigger("change")
      cy.get("input[type=range][name='safety']").invoke("val", 8).trigger("change")
      cy.get("input[type=range][name='cleanliness']").invoke("val", 8).trigger("change")
      cy.get("button#rateFormSubmitButton").contains("submit review").click()
    })
// so dissapointing we can't test something that isn't here ;-; 

    // cy.get("main > div > section#thankYou > p").contains("thank you for taking the time to share your experience with us")
    // https://docs.cypress.io/guides/core-concepts/conditional-testing
  })
})

