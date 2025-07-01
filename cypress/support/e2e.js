
// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath');
// Inside cypress/support/e2e.js or cypress/support/index.js
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

