import { SearchFunctionalityPage } from "../../pages/SearchFunctionalityPage";
const searchobj=new SearchFunctionalityPage();

describe('verify search functionality',()=>{
    let userdata;
    beforeEach(()=>{
        cy.fixture('Register').then((data)=>{
                    userdata=data;

        });

    })
    it('verify user should be able to search ',()=>{
        searchobj.openurl();
        searchobj.enterinsearchbox(userdata.productsearch);
        searchobj.clickonsearch();
        searchobj.verifynameofproduct();

    })

})
