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
    cy.get('form').should("be.visible")
  })

  it("Should have a form that includes input boxes and a submit button", () => {
    cy.intercept('POST', 'https://gaybe-safe-haven.herokuapp.com/api/v1/shelters',{fixture: '../fixtures/postShelter200.json'} )
    cy.get('form').within((form) => {
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
    cy.get('form').within((form) => {
    
      cy.get('input[type=text][name="zip"]').type("02460")
      cy.get('input[type=text][name="phoneNumber"]').type("123-456-7890")
      cy.get('input[type=text][name="websiteURL"]')
    })

    cy.get("button.Form_button__BbaEK").contains("Add Shelter").click()

    cy.get('form').within((form) => {
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
    cy.intercept('POST', 'https://gaybe-safe-haven.herokuapp.com/api/v1/shelters', {fixture: '../fixtures/postShelter200.json'} )
    cy.get('form').within((form) => {
      cy.get('input[type=text][name="zip"]').type("02460")
      cy.get('input[type=text][name="phoneNumber"]').type("(123)456-7890")
      cy.get('input[type=text][name="websiteURL"]')
      cy.get("button.Form_button__BbaEK").contains("Add Shelter").click()
    })
    cy.get('.message').contains("Your submission was successful!").should("be.visible")
    cy.get('.Form_receipt___kJJe > :nth-child(1)').contains('Thrive Youth Center')
    cy.get('.Form_receipt___kJJe > :nth-child(2)').contains("1 Haven for Hope Way")
    cy.get('.Form_receipt___kJJe > :nth-child(3)').contains('San Antonio')
    cy.get('.Form_receipt___kJJe > :nth-child(3)').contains('TX')
    cy.get('.Form_receipt___kJJe > :nth-child(3)').contains('78207')
    cy.get('.Form_receipt___kJJe > :nth-child(4)').contains('312 234-1234')

    cy.get('section > :nth-child(3)').click()
    .url().should("eq", "http://localhost:3000/list/1")
  
  })

  it("Should not submit a form with incomplete fields", () => {
    cy.get("button.Form_button__BbaEK").should('be.disabled')
    cy.get('input[type=text][name="zip"]').type("02460")

    cy.get("button.Form_button__BbaEK").should('be.disabled')
    cy.get('input[type=text][name="phoneNumber"]').type("1234567890")

    cy.get("button.Form_button__BbaEK").should('be.enabled')
  })

  it("Should disallow a user from submitting an improperly formatted zipcode", () => {
    cy.get('input[type=text][name="phoneNumber"]').type("1234567890")
    cy.get('input[type=text][name="zip"]').type("0246")
    cy.get("button.Form_button__BbaEK").click()
    cy.get("p.message").contains("please enter a valid zipcode").should("be.visible")

    cy.get('input[type=text][name="zip"]').type("c")
    cy.get("button.Form_button__BbaEK").click()
    cy.get("p.message").contains("please enter a valid zipcode").should("be.visible")
  })

  it("Should disallow a user from submitting an improperly formatted phone number", () => {
    cy.get('input[type=text][name="zip"]').type("02460")
    cy.get('input[type=text][name="phoneNumber"]').type("(123)456")
    cy.get("button.Form_button__BbaEK").click()
    cy.get("p.message").contains("please enter a valid phone number").should("be.visible")

    cy.get('input[type=text][name="phoneNumber"]').type("-duck")
    cy.get("button.Form_button__BbaEK").click()
    cy.get("p.message").contains("please enter a valid phone number").should("be.visible")
  })

    //it should display prompt for incorrect webpage
    it("Should disallow a user from submitting an improperly formatted webpage", () => {
      cy.intercept('POST', 'https://gaybe-safe-haven.herokuapp.com/api/v1/shelters', {fixture: '../fixtures/postShelter200.json'} )
      cy.get('input[type=text][name="zip"]').type("02460")
      cy.get('input[type=text][name="phoneNumber"]').type("(123)456-7700")
      cy.get('input[type=text][name="websiteURL"]').type('http://www.google.com')
      
      cy.get("button.Form_button__BbaEK").click()
      cy.get("p.message").contains("please enter a valid web address beginning with www.").should("be.visible")

      cy.get('input[type=text][name="websiteURL"]').clear()
      cy.get('input[type=text][name="websiteURL"]').type('.com')
      cy.get("button.Form_button__BbaEK").click()
      cy.get("p.message").contains("please enter a valid web address beginning with www.").should("be.visible")

      cy.get('input[type=text][name="websiteURL"]').clear()
      cy.get('input[type=text][name="websiteURL"]').type('www.google.com')
      cy.get("button.Form_button__BbaEK").click()
      cy.get('.message').contains("Your submission was successful!").should("be.visible")
      cy.get('.Form_receipt___kJJe > :nth-child(1)').contains('Thrive Youth Center')

      cy.get('section > :nth-child(4)').click()
      cy.get('form').should("be.visible")

    })

   
    it("Should display an error message if the server returns an error", () => {
      cy.intercept('POST', 'https://gaybe-safe-haven.herokuapp.com/api/v1/shelters', { statusCode: 500, })

        cy.get('input[type=text][name="zip"]').type("02460")
        cy.get('input[type=text][name="phoneNumber"]').type("123-456-7890")
        cy.get('input[type=text][name="websiteURL"]').type("www.google.com")
        cy.get("button.Form_button__BbaEK").contains("Add Shelter").click()
        cy.get("p.message").contains("There was an error with your submission. Please try again.").should("be.visible")
    })

    //it should display an error message if the user tries to submit a shelter that already exists

    //it should display an error message if the zip code entered is invalid according to BE
})