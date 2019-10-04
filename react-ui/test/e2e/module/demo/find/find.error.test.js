const { FindUserPage } = require('./po');
const Page = require('../../../common/basePage');
const expect = require('expect');

const URL = process.env.URL ? process.env.URL : 'Test URL Missing';

let basePage;
let findUserPage;
describe('Find User Page [Error] ', async function () {
    this.timeout(50000);

    /** Load full page and than check conditions */
    before(async () => {
        basePage = new Page();
        await basePage.visit(URL + 'find');
        findUserPage = new FindUserPage(basePage);
    });

    it('Check [Header Label] of the [Form]', async () => {
        const result = await findUserPage.findUserScreenHeader();
        expect(result).toEqual('Search By Employee Number');
    });

    it('Check [Label] of the [Form]', async () => {
        const result = await findUserPage.findUserLabel();
        expect(result).toEqual('Employee No');
    });

    it('Check [Input Text] of the [Form] and [Enter] User ID and [Click] Submit ', async () => {
        const searchInput = await findUserPage.findUserInputText();
        searchInput.sendKeys('11111');// Employee number
        const findUserSearchButton = await findUserPage.findUserSearchButton();
        findUserSearchButton.click();
        await basePage.getDriver().getCurrentUrl();
        
        expect(await basePage.getDriver().getCurrentUrl()).toEqual(URL + 'view/11111');

    });
    it('Check [Error] is displaying on [screen]', async () => {
        const result = await findUserPage.findUserErrorMessage();
        expect(result).toEqual('No such user found, check user again !!!');
    });

});
