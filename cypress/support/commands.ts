// cypress/support/commands.ts

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      loginToApp(): Chainable<void>;
      closePopups(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('loginToApp', () => {
  const email = Cypress.env('EMAIL');
  const password = Cypress.env('PASSWORD');

  cy.visit('https://testnet.binancefuture.com/en/login');
  cy.get('#login_input_email')
    .type(email);
  cy.get('#login_input_password')
    .type(password);
  cy.wait(5000);
  cy.get('#login_input_login')
    .click();
  cy.wait(40000);
});

Cypress.Commands.add('closePopups', () => {
  cy.get('div.css-4rbxuz > svg.css-1s7p1e9')
    .click();
  cy.contains('button', 'Confirm')
    .should('be.visible')
    .click();
});
