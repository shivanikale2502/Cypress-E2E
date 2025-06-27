import { RegisterPage } from "../../pages/RegisterPage";

const registerobj = new RegisterPage();

describe("verify the registration functionality", () => {
  let userData;

  beforeEach(() => {
    // Load base fixture
    cy.fixture("Register").then((data) => {
      // Generate a unique email using timestamp
      const timestamp = Date.now();
      data.email = `user+${timestamp}@example.com`;
      //for fixture initialization
      userData = data;
    });
  });

  it("verify user should be able to register successfully", () => {
    registerobj.openurl();
    registerobj.enterfirstname(userData.firstname);
    registerobj.enterlastname(userData.lastname);
    registerobj.enteremailid(userData.email);
    registerobj.entertelephone(userData.telephone);
    registerobj.enterpassword(userData.password);
    registerobj.enterconfirmpassword(userData.passwordConfirm);
    registerobj.enterprivacy();
    registerobj.entercontinue();
    registerobj.checkRegistrationSuccess();
  });
});
