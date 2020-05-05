

describe("Testing our form inputs", function () {
    beforeEach(function () {
        cy.visit("http://localhost:3000/pizza/")

    })

    it("first test", function () {
        cy.get('[data-cy="name"]').type("Brian").should("have.value", "Brian");
        cy.get("#size").select("Small").should("have.value", "Small");
        cy.get("#sauce").select("BBQ").should("have.value", "BBQ");
        cy.get('[type="checkbox"]').check().should("be.checked")
        cy.get("textarea")
            .type("Deliver to side door")
            .should("have.value", "Deliver to side door");
        cy.get('[data-cy="submit"]').click();
        cy.get("form").submit();
    })
})