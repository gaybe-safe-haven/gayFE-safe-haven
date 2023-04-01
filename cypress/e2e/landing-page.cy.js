// describe("User Flow: As a user, when I visit the site, I should see a landing page that tells me 'Why This App and What To Do?' ", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000/");
//   });
// 
//   it("Should show the main page of the app with title and header", () => {
//     cy.get("nav").should("have.id", "navContainer")
//     cy.get("h1#title").contains("Our App <3")
//   })
// 
//   it("Should have a nav bar that navigates to different page views using Link", () => {
//     cy.get("button#aboutBtn").contains("about").click()
//       .url().should("eq", "http://localhost:3000/about")
// 
//     cy.get("button#seeListBtn").contains("list").click()
//       .url().should("eq", "http://localhost:3000/list")
// 
//     cy.get("button#addShelterBtn").contains("add a shelter").click()
//       .url().should("eq", "http://localhost:3000/add-shelter")
// 
//     cy.get("button#apiBtn").contains("public api").click()
//       .url().should("eq", "http://localhost:3000/api")
//   })
// 
//   it("Should display images and text in the main section", () => {
//     cy.get("p#statistic120").invoke("text").should("eq", "LGBTQ+ youth are 120% more likely to experience homelessness.")
//     cy.get("img#makeupTeensImg").should("be.visible")
//     cy.get('img[alt="makeup teens"]')
//       .should("have.attr", "src")
//     cy.get("img#facepaintTeenImg").should("be.visible")
//       .should("have.attr", "src")
//   })
// 
//   it("Should have a stripes visual at the foot of the view screen", () => {
//     cy.get(".purpleStripe").should("be.visible")
//   })
//   
// })