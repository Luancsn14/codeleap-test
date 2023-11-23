/// <reference types="Cypress" />

describe('CodeLeap network!', () => {
  beforeEach(function () {
    cy.visit('https://codeleap-frontend-test.netlify.app')
  })

  it('Verify Signup screen', function(){
    cy.title().should('eq', 'Codeleap Frontend Test')
  })

  it('Verify Enter button is disabled', function(){
    cy.get('input[placeholder="John doe"]').should('not.have.value')
    cy.get('button.btn-fill.btn-upper').should('be.disabled')
  })

  it('Verify Enter button is enabled', function(){
    cy.get('input[placeholder="John doe"]').type('Test User')
    cy.get('button.btn-fill.btn-upper').should('be.enabled')
  })

  it('Verify clicking Enter button', function(){
    cy.accessMainScreen()

    cy.get('form[class="standard-form"]').should('be.visible')
  })

  it('Verify Create button is disabled', function(){
    cy.accessMainScreen()

    cy.get('input[name="title"]').should('not.have.value')
    cy.get('textarea[name="content"]').should('not.have.value')
    cy.get('button.btn-fill.btn-upper').should('be.disabled')
  })

  it('Verify Create button is enabled', function(){
    cy.accessMainScreen()
    cy.fillInTheFields()

    cy.get('button.btn-fill.btn-upper').should('be.enabled')
  })

  it('Verify post creation', function(){
    cy.accessMainScreen()
    cy.fillInTheFields()
    cy.get('button.btn-fill.btn-upper').click()

    cy.get('article[class="postCard"]').should('contain', 'Title test')
  })

  it('Verify deleting post', function(){
    cy.accessMainScreen()
    cy.get('input[name="title"]').type('Delete test')
    cy.get('textarea[name="content"]').type('Content test.')  
    cy.get('button.btn-fill.btn-upper').click()
    cy.get('svg[aria-label="Delete your post Delete test"]').click()

    cy.get('article[class="postCard"]').should('not.contain', 'Delete test')
  })


})