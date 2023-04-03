describe("User Flow: As a user, when I choose to add a shelter to the list, I am taken to a form where I can input all the relevant information, and submit it. The shelter will be added to the existing list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/add-shelter");
  });

  it("Should display text and a form in the main section", () => {
    cy.get("h2").contains("Add a shelter to our list")
    cy.get("p").contains("Know of a shelter, but don’t see it here?")
    cy.get(".page_main__ibFHK > :nth-child(2)").should("be.visible")
    cy.get("form.Form_formContainer__j8djA").should("be.visible")
  })

  it("Should have a form that includes input boxes and a submit button", () => {
    cy.get("form.Form_formContainer__j8djA").within((form) => {
      cy.get('input[type=text][name="name"]')
      cy.get('input[type=text][name="streetAddress"]')
      cy.get('input[type=text][name="city"]')
      cy.get('input[type=text][name="state"]')
      cy.get('input[type=text][name="phoneNumber"]')
      cy.get('input[type=text][name="website"]')
      cy.get("button.Form_button__BbaEK").contains("Add Shelter")
    }).should("be.visible")
  })

  it("Should have a button that will submit the new information when clicked", () => {
    cy.get("form.Form_formContainer__j8djA").within((form) => {
      cy.get('input[type=text][name="name"]').type("Test Shelter 1")
      cy.get('input[type=text][name="streetAddress"]').type("123 Test Ave")
      cy.get('input[type=text][name="city"]').type("Seattle")
      cy.get('input[type=text][name="state"]').type("WA")
      cy.get('input[type=text][name="phoneNumber"]').type("1234567890")
      cy.get('input[type=text][name="website"]')
    })

    cy.get("button.Form_button__BbaEK").contains("Add Shelter").click()

    cy.get("form.Form_formContainer__j8djA").within((form) => {
      cy.get('input[type=text][name="name"]').should("be.empty")
      cy.get('input[type=text][name="streetAddress"]').should("be.empty")
      cy.get('input[type=text][name="city"]').should("be.empty")
      cy.get('input[type=text][name="state"]').should("be.empty")
      cy.get('input[type=text][name="phoneNumber"]').should("be.empty")
      cy.get('input[type=text][name="website"]').should("be.empty")
    })
  })

  it("Should have a message that communicates a successful addition when the button is clicked", () => {
    cy.get("form.Form_formContainer__j8djA").within((form) => {
      cy.get('input[type=text][name="name"]').type("Test Shelter 2")
      cy.get('input[type=text][name="streetAddress"]').type("123 Elm Street")
      cy.get('input[type=text][name="city"]').type("Honolulu")
      cy.get('input[type=text][name="state"]').type("HI")
      cy.get('input[type=text][name="phoneNumber"]').type("1234567890")
      cy.get('input[type=text][name="website"]')
      cy.get("button.Form_button__BbaEK").contains("Add Shelter").click()
    })

    cy.get("p.message").contains("Your addition was successful!").should("exist")
  })

  //Should we test the POST request?
})