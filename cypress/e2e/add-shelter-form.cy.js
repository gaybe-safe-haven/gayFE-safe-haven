describe("User Flow: As a user, when I choose to add a shelter to the list, I am taken to a form where I can input all the relevant information, and submit it. The shelter will be added to the existing list", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/add-shelter");
    cy.get('input[type=text][name="name"]').type("Test Shelter 1")
    cy.get('input[type=text][name="streetAddress"]').type("123 Test Ave")
    cy.get('input[type=text][name="city"]').type("Seattle")
    cy.get('input[type=text][name="state"]').type("WA")
  });

  it("Should display text and a form in the main section", () => {
    cy.get("h2").contains("Add a shelter to our list")
    cy.get("p").contains("Know of a shelter, but don’t see it here?")
    cy.get(".page_main__ibFHK > :nth-child(2)").should("be.visible")
    cy.get("form.Form_formContainer__j8djA").should("be.visible")
  })

  it("Should have a form that includes input boxes and a submit button", () => {
    cy.intercept('POST', 'https://bcc0d6a3-cbd5-41b7-be05-284d9753c510.mock.pstmn.io/shelters',{fixture: '../fixtures/postShelter200.json'} )
    cy.get("form.Form_formContainer__j8djA").within((form) => {
      cy.get('input[type=text][name="name"]')
      cy.get('input[type=text][name="streetAddress"]')
      cy.get('input[type=text][name="city"]')
      cy.get('input[type=text][name="state"]')
      cy.get('input[type=text][name="zip"]')
      cy.get('input[type=text][name="phoneNumber"]')
      cy.get('input[type=text][name="websiteURL"]')
      cy.get("button.Form_button__BbaEK").contains("Add Shelter")
    }).should("be.visible")
  })

  it("Should have a button that will submit the new information when clicked", () => {
    cy.get("form.Form_formContainer__j8djA").within((form) => {
    
      cy.get('input[type=text][name="zip"]').type("02460")
      cy.get('input[type=text][name="phoneNumber"]').type("1234567890")
      cy.get('input[type=text][name="websiteURL"]')
    })

    cy.get("button.Form_button__BbaEK").contains("Add Shelter").click()

    cy.get("form.Form_formContainer__j8djA").within((form) => {
      cy.get('input[type=text][name="name"]').should("be.empty")
      cy.get('input[type=text][name="streetAddress"]').should("be.empty")
      cy.get('input[type=text][name="city"]').should("be.empty")
      cy.get('input[type=text][name="state"]').should("be.empty")
      cy.get('input[type=text][name="zip"]').should("be.empty")
      cy.get('input[type=text][name="phoneNumber"]').should("be.empty")
      cy.get('input[type=text][name="websiteURL"]').should("be.empty")
    })
  })

  it("Should have a message that communicates a successful addition when the button is clicked", () => {
    cy.get("form.Form_formContainer__j8djA").within((form) => {
      cy.get('input[type=text][name="zip"]').type("02460")
      cy.get('input[type=text][name="phoneNumber"]').type("1234567890")
      cy.get('input[type=text][name="websiteURL"]')
      cy.get("button.Form_button__BbaEK").contains("Add Shelter").click()
    })
    cy.get("p.message").contains("Your submission was successful!").should("exist")
  })

  it("Should not submit a form with incomplete fields", () => {
    cy.get("button.Form_button__BbaEK").should('be.disabled')
    cy.get('input[type=text][name="zip"]').type("02460")

    cy.get("button.Form_button__BbaEK").should('be.disabled')
    cy.get('input[type=text][name="phoneNumber"]').type("1234567890")

    cy.get("button.Form_button__BbaEK").should('be.enabled')
  })

  it("Should disallow a user from submitting an inproperly formatted zipcode", () => {

  })

    //it should display prompt for incorrect phone number

    //it should display prompt for incorrect webpage

    //it should display an error message if there was an issue with the post

    //it should display an error message if the user tries to submit a shelter that already exists

    //it should display an error message if the zip code entered is invalid
})