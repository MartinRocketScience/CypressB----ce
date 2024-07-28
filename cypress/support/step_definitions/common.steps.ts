import { Given, And } from 'cypress-cucumber-preprocessor/steps';

Given('I am logged into the app', () => {
    cy.loginToApp();
});

And('I close popups', () => {
    cy.closePopups();
});   
