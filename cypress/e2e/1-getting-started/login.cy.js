// cypress/e2e/login.cy.js

describe('Login', () => {
    
  it('successfully logs in', () => {

    cy.guiLogin()
    cy.contains('h1', 'Your Notes').should('be.visible')
    //cy.contains('h1', 'Your Notes', { timeout: 10000 }).should('be.visible');
  })
})
