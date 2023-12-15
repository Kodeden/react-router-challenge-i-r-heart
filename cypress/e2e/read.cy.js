describe("read", () => {
  it("displays the contacts", () => {
    cy.intercept("GET", "/contacts", { fixture: "contacts.json" });
    cy.visit("http://localhost:5173");

    cy.findAllByRole("listitem").should("have.length", 10);
  });

  it("navigates between the contacts list and an individual contact", () => {
    // cy.intercept("GET", "/contacts", { fixture: "contacts.json" });
    // cy.intercept("GET", "/contacts/*", { fixture: "contact.json" });

    const FIRST_NAME_IN_FIXTURE = "Kelly Baumbach";
    const FIRST_NAME_IN_FIXTURE_EMAIL = "Kelly_Baumbach85@gmail.com";

    cy.visit("http://localhost:5173");

    cy.findByRole("link", { name: FIRST_NAME_IN_FIXTURE }).click();

    cy.findByTestId("nameHeading", { name: FIRST_NAME_IN_FIXTURE }).should(
      "exist",
    );

    cy.findByTestId("emailProfile", {
      name: FIRST_NAME_IN_FIXTURE_EMAIL,
    }).should("exist");

    cy.findByRole("link", { name: /Back to Main Contacts List/i }).click();

    cy.findAllByRole("listitem").should("have.length.gte", 1);
  });
});
