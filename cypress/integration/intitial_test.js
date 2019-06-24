describe("Verifies that user can access Espn.com", function() {
  it("Verifies that espn.com displays", function() {
    cy.visit("https://www.espn.com");
    //cy.contains("Comedy").click();
    //cy.url().should("include", "=comedy");
  });
});
