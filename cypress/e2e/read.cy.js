describe("read", () => {
  it("displays the contacts", () => {
    // Intercept the GET request to /contacts and mock the response with a fixture:
    cy.intercept("GET", "/contacts", { fixture: "contacts.json" });

    // Visit the application:
    cy.visit("http://localhost:5173");

    // Ensure there are 10 list items (contacts) on the page:
    cy.findAllByRole("listitem").should("have.length", 10);
  });

  it("navigates between the contacts list and an individual contact", () => {
    // write needed constants for the first contact in the fixture:
    const FIRST_NAME_IN_FIXTURE = "Kelly Fixture";
    const FIRST_NAME_IN_FIXTURE_EMAIL = "Kelly_Fixture85@gmail.com";

    // Intercept the GET request to /contacts and mock the response with a fixture:
    cy.intercept("GET", "/contacts", { fixture: "contacts.json" });

    // Visit the application:
    cy.visit("http://localhost:5173");

    // Ensure there are 10 list items (contacts) on the page:
    cy.findAllByRole("listitem").should("have.length", 10);

    // Ensure the link with the specified name exists on the page:
    cy.findByRole("link", { name: FIRST_NAME_IN_FIXTURE }).should("exist");

    // Intercept the GET request to /contacts/* and mock the response with a fixture:
    cy.intercept("GET", "/contacts/*", { fixture: "contact.json" });

    // Visit the individual contact page by clicking on the link with the specified name:
    cy.visit("http://localhost:5173");
    cy.findByRole("link", { name: FIRST_NAME_IN_FIXTURE }).click();

    // Ensure the heading with the specified name exists on the individual contact's profile:
    cy.findByTestId("nameHeading", { name: FIRST_NAME_IN_FIXTURE }).should(
      "exist",
    );

    // Ensure the heading with the specified email exists on the individual contact's profile:
    cy.findByTestId("emailProfile", {
      name: FIRST_NAME_IN_FIXTURE_EMAIL,
    }).should("exist");

    // Click on the "Back to Main Contacts List" link to navigate back to the contacts list:
    cy.findByRole("link", { name: /Back to Main Contacts List/i }).click();

    // Ensure there are 10 list items (contacts) on the page after navigating back:
    cy.findAllByRole("listitem").should("have.length", 10);
  });
});
