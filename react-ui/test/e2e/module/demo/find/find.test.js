const { FindUserPage } = require('./po');
const Page = require('../../../common/basePage');
const expect = require('expect');
const userMock = require('../data/user-data');

const URL = process.env.URL ? process.env.URL : 'Test URL Missing';

let basePage;
let findUserPage;
describe('Find User Page  ', async function () {
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
        searchInput.sendKeys(userMock.id);
        const findUserSearchButton = await findUserPage.findUserSearchButton();
        findUserSearchButton.click();
        const findUserBackButton = await findUserPage.findUserBackButton();
        expect(await basePage.getDriver().getCurrentUrl()).toEqual(URL + 'view/' + userMock.id);
        expect(findUserBackButton).toEqual('Back');

    });

    it('Check Employee Number [Label] & [RESPONSE]received from [REST API]', async () => {
        const result = await findUserPage.userReceivedEmployeeNo();
        expect(result.label).toEqual('Employee Number');
        expect(result.value).toEqual(userMock.id);
    });
    it('Check Employee Name [Label] & [RESPONSE]received from [REST API]', async () => {
        const result = await findUserPage.userReceivedEmployeeName();
        expect(result.label).toEqual('Name');
        expect(result.value).toEqual(userMock.firstName + ' ' + userMock.lastName);
    });
    it('Check Employee Email [Label] & [RESPONSE] received from [REST API]', async () => {
        const result = await findUserPage.userReceivedEmployeeEmail();
        expect(result.label).toEqual('Email');
        expect(result.value).toEqual(userMock.email);
    });
    it('Check Employee Mobile No [Label] & [RESPONSE] received from [REST API]', async () => {
        const result = await findUserPage.userReceivedEmployeeMobileNo();
        expect(result.label).toEqual('Mobile');
        expect(result.value).toEqual(userMock.mobile);
    });
    it('Check [Delete] button ', async () => {
        const result = await findUserPage.findUserDeleteButton();
        expect(result).toEqual('Delete');
    });
});
