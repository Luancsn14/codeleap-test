/// <reference types="cypress" />

Cypress.Commands.add('accessMainScreen', function () {
    cy.get('input[placeholder="John doe"]').type('Test User')
    cy.get('button.btn-fill.btn-upper').click()
})

Cypress.Commands.add('fillInTheFields', function () {
    cy.get('input[name="title"]').type('Title test')
    cy.get('textarea[name="content"]').type('Content test.')
})