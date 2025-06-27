import { ContactUs } from "../../pages/ContactUsPage";
const contsctusobj = new ContactUs();

describe('verify contactus functionality', () => {
    let userdata;
    beforeEach(() => {
        cy.fixture('Register').then((data) => {
            let timestamp = Date.now();
            data.email = `user+${timestamp}@example.com`
            userdata = data;

        })
    })


    it('verify user should be able to use contact us functionality', () => {
        contsctusobj.openurl();
        contsctusobj.EnterYourName(userdata.firstname);
        contsctusobj.EnterYourEmail(userdata.email);
        contsctusobj.Enquiry(userdata.enquirymessage);
        contsctusobj.ClickOnSubmitBtn();
        contsctusobj.verifymessageon();
    })
})