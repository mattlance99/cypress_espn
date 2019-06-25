describe("Verifies that after entering Wicked the entry appears", function() {
  it("Enters Wicked in the search for title textbox", function() {
    cy.visit("https://www.espn.com");
    cy.get("input").type("NFL");
    cy.contains("NFL").click();
    //This next step would fail if the result didn't exist
    cy.url().should("include", "/NFL/");
  });
});
