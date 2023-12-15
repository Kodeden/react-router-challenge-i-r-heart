it("searches for a contact", () => {
  // write needed constant for the first contact in the fixture:
  const NAME_SEARCH_RESULT = "Kelly Fixture";
  const SEARCH_TERM = "Fixture";

  // Intercept the GET request to /contacts and mock the response with a fixture:
  cy.intercept("GET", "/contacts", { fixture: "contacts.json" });

  // Visit the application:
  cy.visit("http://localhost:5173");

  // Ensure there are 10 list items (contacts) on the page:
  cy.findAllByRole("listitem").should("have.length", 10);

  // load the `contacts.json` fixture:
  cy.fixture("contacts.json").then((contacts) => {
    // assuming the search term is "Fixture":
    const searchTerm = SEARCH_TERM;

    // filter the contacts from the fixture whose names include the search term:
    const expectedResults = contacts.filter((contact) =>
      contact.name.includes(searchTerm),
    );

    // visit the application:
    cy.visit("http://localhost:5173");

    // type the search term into the search input:
    cy.get(`[placeholder="🔍 Search..."]`).type(searchTerm);

    // wait for the results to appear:
    cy.findAllByRole("listitem").should("have.length", expectedResults.length);
  });

  // ensure the searched name is in the list:
  cy.findAllByRole("link", { name: NAME_SEARCH_RESULT }).should("exist");
});
