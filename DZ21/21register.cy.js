import signInPage from './21SignIn';

describe('SignIn', () => {
  beforeEach(() => {
    signInPage.open();
  });

  it('should sign in with user1', () => {
    signInPage.login(
      Cypress.env('user1Email'),
      Cypress.env('user1Password')
    );
    cy.url().should('include', '/panel/garage');
  });

  it('should sign in with user2', () => {
    signInPage.login(
      Cypress.env('user2Email'),
      Cypress.env('user2Password')
    );
    cy.url().should('include', '/panel/garage');
  });
});
