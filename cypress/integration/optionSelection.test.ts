/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit('https://yoga-fit.netlify.app/');
    // cy.visit("http://localhost:3000/");
    cy.on("uncaught:exception", (err) => {
      // expect(err.message).to.include('Ignoring error for now');
      return false;
    });
  });

  it("Should display all elements", () => {
    cy.get(".header-box");
    cy.get(".Duration-Selection");
    cy.get(".Option-Selection");
    cy.get(".Option-Selection");
  });

  it("Select options and get videos", () => {
    cy.get("#time-dropdown").select("45 mins");
    cy.get("#vinyasa").check();
    cy.get(".submit-button").click();
    cy.get(".video").should('be.visible');



  });

});
