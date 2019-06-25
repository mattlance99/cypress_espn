describe("Verifies that user can access Espn.com", function() {
  it("Verifies that espn.com displays", function() {
    cy.visit("https://www.espn.com");

    //Added this line as my second commit
    cy.url().should("include", "www.espn.com");
  });
});
