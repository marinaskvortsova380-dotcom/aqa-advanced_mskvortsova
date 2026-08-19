/// <reference types="cypress" />

describe("Знайти всі кнопки з хедера на https://qauto.forstudy.space/", () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });
  });

  it("headerButtons", () => {
    const homeButton = 'header a.header-link';
    const aboutButton = 'header button.header-link';
    const contactsButton = 'header button.header-link';
    const guestLoginButton = 'button.header-link.-guest';
    const signInButton = 'button.header_signin';
    const hillelAutoButton = 'header a.header_logo';

    cy.get(hillelAutoButton).should('be.visible');
    cy.get(homeButton).contains('Home').should('be.visible');
    cy.get(aboutButton).contains('About').should('be.visible');
    cy.get(contactsButton).contains('Contacts').should('be.visible');
    cy.get(guestLoginButton).should('be.visible').and('have.text', 'Guest log in');
    cy.get(signInButton).should('be.visible').and('have.text', 'Sign In');
  });
});

describe("Знайти всі посилання на кнопки з футера на https://qauto.forstudy.space/", () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });
  });

  it("footerButtons", () => {
    const facebookLink = '[href*="facebook.com"]';
    const telegramLink = '[href*="t.me"]';
    const instagramLink = '[href*="instagram.com"]';
    const linkedinLink = '[href*="linkedin.com"]';
    const youtubeLink = '[href*="youtube.com"]';
    const hillelLink = '[href*="ithillel.ua"]';
    const supportLink = '[href*="mailto:"]';

    cy.get('footer').scrollIntoView();

    cy.get(facebookLink).should('be.visible');
    cy.get(telegramLink).should('be.visible');
    cy.get(instagramLink).should('be.visible');
    cy.get(linkedinLink).should('be.visible');
    cy.get(youtubeLink).should('be.visible');
    cy.get(hillelLink).should('be.visible');
    cy.get(supportLink).should('be.visible');
  });
});