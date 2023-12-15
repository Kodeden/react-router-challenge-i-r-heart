it("deletes a contact", () => {
  // create needed constants:
  const CONTACT_ID_TO_DELETE = "1";
  const CONTACT_NAME_TO_DELETE = "Kelly Fixture";
  const CONTACT_EMAIL_TO_DELETE = "Kelly_Fixture85@gmail.com";

  // Intercept the GET request to /contacts and mock the response with a fixture
  cy.intercept("GET", "/contacts", { fixture: "contacts.json" });

  // Visit the application:
  cy.visit("http://localhost:5173");

  // Ensure there are 10 list items (contacts) on the page:
  cy.findAllByRole("listitem").should("have.length", 10);

  // Ensure the link with the specified name exists on the page:
  cy.findByRole("link", { name: CONTACT_NAME_TO_DELETE }).should("exist");

  // Intercept the GET request to /contacts/{CONTACT_ID_TO_DELETE} and mock the response with a fixture:
  cy.intercept("GET", `/contacts/${CONTACT_ID_TO_DELETE}`, {
    fixture: "contact.json",
  });

  // Visit the contact's page using the specified CONTACT_ID_TO_DELETE:
  cy.request(`http://localhost:5173/contacts/${CONTACT_ID_TO_DELETE}`);

  // Click on the link with the specified name (contact's name):
  cy.findByRole("link", { name: CONTACT_NAME_TO_DELETE }).click();

  // Ensure the heading with the specified name exists on the page:
  cy.findByTestId("nameHeading", { name: CONTACT_NAME_TO_DELETE }).should(
    "exist",
  );

  // Ensure the email with the specified name exists on the page
  cy.findByTestId("emailProfile", { name: CONTACT_EMAIL_TO_DELETE }).should(
    "exist",
  );

  // Use Cypress fixture to get the initial state of contacts:
  cy.fixture("contacts").then((contacts) => {
    // Find the index of the contact to delete based on its ID:
    const contactToDeleteIndex = contacts.findIndex(
      (contact) => contact.id === CONTACT_ID_TO_DELETE,
    );

    // Throw an error if the contact is not found:
    if (contactToDeleteIndex === -1) {
      throw new Error("Contact not found in the fixture.");
    }

    // Remove the contact from the contacts array:
    const updatedContacts = contacts.filter(
      (contact, index) => index !== contactToDeleteIndex,
    );

    // intercept the GET request to /contacts and return the updated contacts list::
    cy.intercept("GET", "/contacts", {
      statusCode: 200,
      body: updatedContacts,
    });

    // Intercept the DELETE request to `/contacts` and return a success status:
    cy.intercept("DELETE", "/contacts", {
      statusCode: 204,
    });

    // Click on the "Delete Contact" button:
    cy.findByRole("button", { name: /Delete Contact/i }).click();

    // verify the contact list is one less than before and the delete contact is not in the list after the delete:
    cy.visit("http://localhost:5173");
    cy.findAllByRole("listitem").should("have.length", 9);
    cy.findByRole("link", { name: CONTACT_NAME_TO_DELETE }).should("not.exist");
  });
});
