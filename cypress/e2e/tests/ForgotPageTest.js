import { ForgotPassword } from "../../pages/ForgotPasswordPage";
const forgotobj = new ForgotPassword();

describe('verify forgotpassword functionality', () => {
    let userData;
    beforeEach(() => {
        cy.fixture('Register').then((data) => { //data is used for calling the items from register fixture file
            // const timestamp=Date.now();
            //data.email=`user+${timestamp}@example.com`;
            userData = data;

        })

    })

    it('verify user should be able to forgot password', () => {
        forgotobj.openurl();
        forgotobj.enteremailid(userData.loginemail);
        forgotobj.clickoncontinue();
        forgotobj.validateEmailSentMessage();



    })
    it('verify user should be able to use back btn', () => {
        forgotobj.openurl();
        forgotobj.clickonbackbtn();
        cy.url().should('include', 'https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    })
})