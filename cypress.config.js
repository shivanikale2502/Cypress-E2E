const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "8jj1c7",
   reporter: "mochawesome", // ✅ Added for Mochawesome
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true,
    
  },
  e2e: {
    // Add custom spec pattern to allow .js and .tsx files
    specPattern: "cypress/e2e/**/*.{js,tsx}",

    // Page load timeout in milliseconds
    pageLoadTimeout: 60000, // 60 seconds

    // Enable test retries (2 retries for failed tests)
    retries:  {
      runMode:2,
      openMode:1
    },
    env:{
      URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
      LOGINURL:'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
      FORGOTPASSURL:'https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten',
      CONTACTUSURL:'https://naveenautomationlabs.com/opencart/index.php?route=information/contact',
      SEARCHURL:'https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17',


       "APIKey":"eea45afce532d140a82d28bd49454baf",
      "APIToken":"ATTAb252d8f2942a95bf8f6f411dcb2612bb9ca2816723d2d6c396a943deb8a47e00094E40AA"


    },
    
    

    // Chrome web security setting (false disables web security)
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
