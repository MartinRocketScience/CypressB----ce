# CypressB--------ce

## Description
CypressB--------ce is an automation demo testing project for the B--------ce Futures platform, utilizing the Cypress framework with Cucumber and TypeScript integration for creating end-to-end (E2E) tests.

## System Requirements
- Node.js (latest LTS version recommended)
- npm (usually installed with Node.js)

## Installation
1. Clone the repository:
```
git clone [REPOSITORY_URL]
```
2. Navigate to the project directory:
```
cd cypressbinance
```
3. Install dependencies:
```
npm install
```

## Configuration
The project is configured to test B--------ce . Main settings are in the `cypress.config.ts` file:

- Base URL: https://testnet.b--------cefuture.com/
- Viewport resolution: 1440x900
- Spec pattern: `cypress/e2e/**/*.feature`

## Environment Variables

To run the Cypress tests, you need to set the following environment variables:

- `EMAIL`: The email address used to log into the application.
- `PASSWORD`: The password used to log into the application.

### Using `cypress.json`

You can set the environment variables directly in the `cypress.json` file:

```json
{
  "env": {
    "EMAIL": "your-email@example.com",
    "PASSWORD": "your-secure-password"
  }
}
```

## Running Tests
To run tests in a visual environment, use the following command:
```
npx cypress open
```
To run tests in a console, use the following command(example with tags):
```
npx cypress run --env TAGS='@BuyLongOnMarket'
```

## Project Structure
- `cypress/e2e/`: Directory containing feature files with Cucumber tests
- `cypress/support/`: Directory with helper files, e.g., Cucumber step definitions, commands
- `tsconfig.json`: TypeScript configuration
- `cypress.config.ts`: Main Cypress configuration file

## Technologies
- Cypress 13.13.1
- TypeScript 5.5.4
- cypress-cucumber-preprocessor 4.3.1
- for better codestyle quality you should use eslint-plugin-cypress

## Author
Marcin Boryczko

## License
ISC