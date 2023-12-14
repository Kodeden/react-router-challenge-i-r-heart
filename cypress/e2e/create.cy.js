it("adds a contact", () => {
  cy.visit("http://localhost:5173");

  cy.findByRole("link", { name: "Add Contact" }).click();

  cy.findByLabelText(/Name/i).type("Joey Abrams");
  cy.findByLabelText(/Phone/i).type("555-555-5555");
  cy.findByLabelText(/Email/i).type("jabrams@test.com");

  cy.findByRole("button", { name: "Save Contact" }).click();

  cy.findByText("Joey Abrams").should("exist");
});
