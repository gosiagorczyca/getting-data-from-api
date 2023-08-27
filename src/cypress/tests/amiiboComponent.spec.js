describe("AmiiboComponent", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully loads and displays data", () => {
    // Load fixture data
    cy.fixture("amiiboData").then((amiiboData) => {
      cy.intercept("GET", "**/amiibo?name=Mario", amiiboData).as("getAmiibo");

      // Type into the input field and check if data loads correctly
      cy.get('[data-testid="amiibo-name-input"]').type("Mario");
      cy.get('[data-testid="loading-indicator"]').should("exist");
      cy.get('[data-testid="amiibo-grid"]').should("exist");
      cy.get('[data-testid="amiibo-grid"] [data-testid="amiibo-card"]').should(
        "have.length",
        amiiboData.amiibo.length
      );
    });
  });
});
