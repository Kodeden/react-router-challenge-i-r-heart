it("adds a contact", () => {
  cy.visit("http://localhost:5173");

  cy.findByRole("link", { name: "Add Contact" }).click();
});
