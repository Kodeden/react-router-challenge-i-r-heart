it("edits a contact", () => {
  // create needed constants:
  const CONTACT_ID_TO_UPDATE = "1";
  const FIRST_NAME_IN_FIXTURE = "Kelly Fixture";
  const FIRST_NAME_IN_FIXTURE_EMAIL = "Kelly_Fixture85@gmail.com";
  const UPDATED_NAME = "Kelly Fixture-Updated";
  const UPDATED_EMAIL = "Kelly_FixtureUpdated85@gmail.com";

  // Intercept the GET request to /contacts and mock the response with a fixture
  cy.intercept("GET", "/contacts", { fixture: "contacts.json" });

  // Visit the application:
  cy.visit("http://localhost:5173");

  // Ensure there are 10 list items (contacts) on the page:
  cy.findAllByRole("listitem").should("have.length", 10);

  // Ensure the link with the specified name exists on the page:
  cy.findByRole("link", { name: FIRST_NAME_IN_FIXTURE }).should("exist");

  // Intercept the GET request to /contacts/{CONTACT_ID_TO_UPDATE} and mock the response with a fixture:
  cy.intercept("GET", `/contacts/${CONTACT_ID_TO_UPDATE}`, {
    fixture: "contact.json",
  });

  // Visit the contact's page using the specified CONTACT_ID_TO_UPDATE:
  cy.request(`http://localhost:5173/contacts/${CONTACT_ID_TO_UPDATE}`);

  // Click on the link with the specified name (contact's name):
  cy.findByRole("link", { name: FIRST_NAME_IN_FIXTURE }).click();

  // Ensure the heading with the specified name exists on the page:
  cy.findByTestId("nameHeading", { name: FIRST_NAME_IN_FIXTURE }).should(
    "exist",
  );

  // Ensure the email with the specified name exists on the page
  cy.findByTestId("emailProfile", { name: FIRST_NAME_IN_FIXTURE_EMAIL }).should(
    "exist",
  );

  // Click on the "Edit Contact" link:
  cy.findByRole("link", { name: /Edit Contact/i }).click();

  // Use Cypress fixture to get the initial state of contacts:
  cy.fixture("contacts").then((contacts) => {
    // Find the index of the contact to update based on its ID:
    const contactToUpdateIndex = contacts.findIndex(
      (contact) => contact.id === CONTACT_ID_TO_UPDATE,
    );

    // Throw an error if the contact is not found:
    if (contactToUpdateIndex === -1) {
      throw new Error("Contact not found in the fixture.");
    }

    // Create an updated contact object:
    const updatedContact = {
      name: UPDATED_NAME,
      email: UPDATED_EMAIL,
    };

    // Map over the contacts array and update the specified contact:
    const updatedContacts = contacts.map((contact, index) =>
      index === contactToUpdateIndex
        ? { ...contact, ...updatedContact }
        : contact,
    );

    // Intercept the GET request to /contacts and return the updated contacts:
    cy.intercept("GET", "/contacts", {
      statusCode: 200,
      body: updatedContacts,
    });

    // Intercept the PATCH request to /contacts and return the updated contact:
    cy.intercept("PATCH", "/contacts", (req) => {
      req.reply({
        statusCode: 200,
        body: { ...updatedContacts[contactToUpdateIndex], ...req.body },
      });
    });

    // Click the "Save Edits to Contact" button:
    cy.findByRole("button", { name: /Save Edits to Contact/i }).click();

    // verify the contact list is the same length as before and the updated contact is in the list after the edit:
    cy.visit("http://localhost:5173");
    cy.findAllByRole("listitem").should("have.length", 10);
    cy.findByRole("link", { name: "Kelly Fixture-Updated" }).should("exist");

    // load the updated contact's fixture profile page:
    cy.intercept("GET", `/contacts/${CONTACT_ID_TO_UPDATE}`, {
      fixture: "contact.json",
    });
    cy.request(`http://localhost:5173/contacts/${CONTACT_ID_TO_UPDATE}`);

    // Click on the link with the updated name:
    cy.findByRole("link", { name: UPDATED_NAME }).click();

    // verify the updated contact info is now on its profile page:
    cy.findByTestId("nameHeading", { name: UPDATED_NAME }).should("exist");

    cy.findByTestId("emailProfile", {
      name: UPDATED_EMAIL,
    }).should("exist");
  });
});
