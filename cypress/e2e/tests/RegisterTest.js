import { RegisterPage } from "../../pages/RegisterPage";
import { RegisterPageNegative } from "../../pages/RegisterPageNegative";

const registerNegativePage = new RegisterPageNegative();
const registerPage = new RegisterPage();

describe("verify the registration functionality", () => {
  let userData;

  beforeEach(() => {
    cy.fixture("Register").then((data) => {
      const timestamp = Date.now();
      data.email = `user+${timestamp}@example.com`;
      userData = data;
    });
  });

  it("verify user should be able to register successfully with valid details", () => {
    registerPage.openurl();
    registerPage.enterfirstname(userData.firstname);
    registerPage.enterlastname(userData.lastname);
    registerPage.enteremailid(userData.email);
    registerPage.entertelephone(userData.telephone);
    registerPage.enterpassword(userData.password);
    registerPage.enterconfirmpassword(userData.passwordConfirm);
    registerPage.enterprivacy();
    registerPage.entercontinue();
    registerPage.checkRegistrationSuccess();
  });

  it("verify user should not be able to register without filling the mandatory details", () => {
    registerNegativePage.openurl();
    registerNegativePage.enterfirstname();
    registerNegativePage.enterlastname();
    registerNegativePage.enteremailid();
    registerNegativePage.entertelephone();
    registerNegativePage.enterpassword();
    registerNegativePage.enterconfirmpassword();
    registerNegativePage.enterprivacy();
    registerNegativePage.entercontinue();
    registerNegativePage.verifyemptynamemessage();
    registerNegativePage.verfiyemptylastnamemessage();
    registerNegativePage.verifyemptyemailmessage();
    registerNegativePage.verifyemptytelmessage();
  });

  it("verify user should not be able to register without filling the password", () => {
    registerPage.openurl();
    registerPage.enterfirstname(userData.firstname);
    registerPage.enterlastname(userData.lastname);
    registerPage.enteremailid(userData.email);
    registerPage.entertelephone(userData.telephone);
    registerPage.entercontinue();
    registerNegativePage.verifyemptypassmessage();
  });

  it("verify user should not be able to register without checking the privacy policy", () => {
    registerPage.openurl();
    registerPage.enterfirstname(userData.firstname);
    registerPage.enterlastname(userData.lastname);
    registerPage.enteremailid(userData.email);
    registerPage.entertelephone(userData.telephone);
    registerPage.enterpassword(userData.password);
    registerPage.enterconfirmpassword(userData.passwordConfirm);
    registerPage.entercontinue();
    registerNegativePage.verifyuncheckprivacymessage();
  });

  it("verify user should not be able to register with mismatched passwords", () => {
    registerNegativePage.openurl();
    registerPage.enterfirstname(userData.firstname);
    registerPage.enterlastname(userData.lastname);
    registerPage.enteremailid(userData.email);
    registerPage.entertelephone(userData.telephone);
    registerPage.enterpassword(userData.password);
    registerNegativePage.entermismatchpass(userData.passwordMismatch);
    registerPage.enterprivacy();
    registerNegativePage.entercontinue();
    registerNegativePage.verifymismatchpassmessageerror();
  });
});
