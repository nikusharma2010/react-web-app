const { DeleteUserPage } = require('./po');
const Page = require('../../../common/basePage');
const expect = require('expect');
const userMock = require('../data/user-data');

const URL = process.env.URL ? process.env.URL : 'Test URL Missing';

let basePage;
let deleteUserPage;
describe('Delete User Page  ', async function () {
    this.timeout(50000);

    /** Load full page and than check conditions */
    before(async () => {
        basePage = new Page();
        await basePage.visit(URL + 'find');
        deleteUserPage = new DeleteUserPage(basePage);

    });

    after(async () => {
        await basePage.quit();
    });

    it('Check [Header Label] of the [Form]', async () => {
        const result = await deleteUserPage.deleteUserScreenHeader();
        expect(result).toEqual('Search By Employee Number');
    });

    it('Check [Label] of the [Form]', async () => {
        const result = await deleteUserPage.deleteUserLabel();
        expect(result).toEqual('Employee No');
    });

    it('Check [Input Text] of the [Form] and [Enter] User ID and [Click] Submit ', async () => {
        const searchInput = await deleteUserPage.deleteUserInputText();
        searchInput.sendKeys(userMock.id);
        const deleteUserSearchButton = await deleteUserPage.deleteUserSearchButton();
        deleteUserSearchButton.click();
        const deleteUserBackButton = await deleteUserPage.deleteUserBackButton();
        expect(await basePage.getDriver().getCurrentUrl()).toEqual(URL + 'view/' + userMock.id);
        expect(deleteUserBackButton).toEqual('Back');

    });

    it('Check Employee Number [Label] & [RESPONSE] received from [REST API]', async () => {
        const result = await deleteUserPage.userReceivedEmployeeNo();
        expect(result.label).toEqual('Employee Number');
        expect(result.value).toEqual(userMock.id);
    });
    it('Check Employee Name [Label] & [RESPONSE] received from [REST API]', async () => {
        const result = await deleteUserPage.userReceivedEmployeeName();
        expect(result.label).toEqual('Name');
        expect(result.value).toEqual(userMock.firstName + ' ' + userMock.lastName);
    });
    it('Check Employee Email [Label] & [RESPONSE] received from [REST API]', async () => {
        const result = await deleteUserPage.userReceivedEmployeeEmail();
        expect(result.label).toEqual('Email');
        expect(result.value).toEqual(userMock.email);
    });
    it('Check Employee Mobile No [Label] & [RESPONSE]received from [REST API]', async () => {
        const result = await deleteUserPage.userReceivedEmployeeMobileNo();
        expect(result.label).toEqual('Mobile');
        expect(result.value).toEqual(userMock.mobile);
    });

    it('Check [Click] on Delete Button ', async () => {
        const deleteUserButton = await deleteUserPage.deleteUserDeleteButton();
        deleteUserButton.click();
        const deleteUserSuccessMessage = await deleteUserPage.deleteUserSuccessMessage();
        expect(deleteUserSuccessMessage).toEqual('!!! User Deleted Successfully !!!');

    });
});
