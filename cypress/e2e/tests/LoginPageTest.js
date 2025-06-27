import { LoginPage } from "../../pages/LoginPage";


const loginpageobj = new LoginPage();

describe("verify the login functionality", () => {
    let userData;

    beforeEach(() => {
        // Load base fixture
        cy.fixture("Register").then((data) => {
            // Generate a unique email using timestamp
            const timestamp = Date.now();
            data.email = `user+${timestamp}@example.com`;
            userData = data;
        });
    });

    it("verify user should be able to login successfully", () => {
        loginpageobj.openurl();
        loginpageobj.enteremailid(userData.loginemail);
        loginpageobj.enterpassword(userData.loginpassword);
        loginpageobj.clickonlogin();
    });
    it("verify user should be able to forgot password", () => {

        loginpageobj.openurl();
        loginpageobj.clickforgotpass();
    })
    
});
