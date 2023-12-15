// write needed Constants for the new contact details:
const NEW_NAME = "Joey Abrams";
const NEW_PHONE = "555-555-5555";
const NEW_EMAIL = "jabrams@test.com";

it("adds a contact", () => {
  // create a variable, `newContact`:
  const newContact = {
    id: 11,
    name: NEW_NAME,
    email: NEW_EMAIL,
    tel: NEW_PHONE,
  };

  // stub the response from the server with the `newContact` object:
  cy.intercept("POST", "/contacts", {
    statusCode: 201,
    body: newContact,
  }).as("createContact");

  // verify that we only have 10 contacts on the screen prior to navigating to to the 'Add Contact' page. Also, verify that `NEW_NAME` is not in the list:
  cy.intercept("GET", "/contacts", { fixture: "contacts.json" });
  cy.visit("http://localhost:5173");
  cy.findAllByRole("listitem").should("have.length", 10);
  cy.findByRole("link", { name: NEW_NAME }).should("not.exist");

  // Click on the "Add Contact" link to navigate to the 'Add Contact' page:
  cy.findByRole("link", { name: /Add Contact/i }).click();

  // Fill in the form with the new contact details:
  cy.findByLabelText(/Name/i).type(NEW_NAME);
  cy.findByLabelText(/Phone number/i).type(NEW_PHONE);
  cy.findByLabelText(/Email/i).type(NEW_EMAIL);

  // set up the GET to intercept prior to clicking the Save button, ensuring it will get called after a successful POST:
  cy.fixture("contacts").then((contacts) => {
    cy.intercept("GET", "/contacts", {
      statusCode: 200,
      body: [...contacts, newContact],
    });
  });

  // Click the "Save Contact" button:
  cy.findByRole("button", { name: /Save Contact/i }).click();

  // Wait for the POST request to complete and get information about the request:
  cy.wait("@createContact").then(({ request }) => {
    const { name, email, tel } = request.body;

    // as long as our submission is valid, we can proceed with the other assertions that the GET intercept fired:
    expect(name).to.equal(NEW_NAME);
    expect(email).to.equal(NEW_EMAIL);
    expect(tel).to.equal(NEW_PHONE);
  });

  // Verify that there are now 11 contacts on the screen:
  cy.findAllByRole("listitem").should("have.length", 11);

  // Verify that the link with the new name exists in the list:
  cy.findByRole("link", { name: NEW_NAME }).should("exist");
});
