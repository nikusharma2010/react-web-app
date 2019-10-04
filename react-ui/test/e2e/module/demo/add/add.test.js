const { AddUserPage } = require('./po');
const Page = require('../../../common/basePage');
const expect = require('expect');
const userMock = require('../data/user-data');

const URL = process.env.URL ? process.env.URL : 'Test URL Missing';

let basePage;
let addUserPage;
describe('Add User Page  ', async function () {
    this.timeout(50000);

    /** Load full page and than check conditions */
    before(async () => {
        basePage = new Page();
        await basePage.visit(URL + 'add');
        addUserPage = new AddUserPage(basePage);
    });


    it('Check [Header Label] of the [Form]', async () => {
        const result = await addUserPage.addUserScreenHeader();
        expect(result).toEqual('Create a New Employee record');
    });

    it('Check [Label] and [Input Text] of the [Form] for [Employee No]', async () => {
        const label = await addUserPage.addUserEmployeeNoLabel();
        const inputText = await addUserPage.addUserEmployeeNoInput();
        inputText.sendKeys(userMock.id);
        expect(label).toEqual('Employee Number');
    });
    it('Check [Label] and [Input Text] of the [Form] for [First Name]', async () => {
        const label = await addUserPage.addUserFirstNameLabel();
        const inputText = await addUserPage.addUserFirstNameInput();
        inputText.sendKeys(userMock.firstName);
        expect(label).toEqual('First Name');
    });

    it('Check [Label] and [Input Text] of the [Form] for [Last Name]', async () => {
        const label = await addUserPage.addUserLastNameLabel();
        const inputText = await addUserPage.addUserLastNameInput();
        inputText.sendKeys(userMock.lastName);
        expect(label).toEqual('Last Name');
    });
    it('Check [Label] and [Input Text] of the [Form] for [Email]', async () => {
        const label = await addUserPage.addUserEmailLabel();
        const inputText = await addUserPage.addUserEmailInput();
        inputText.sendKeys(userMock.email);
        expect(label).toEqual('Email');
    });
    it('Check [Label] and [Input Text] of the [Form] for [Mobile]', async () => {
        const label = await addUserPage.addUserMobileLabel();
        const inputText = await addUserPage.addUserMobileInput();
        inputText.sendKeys(userMock.mobile);
        expect(label).toEqual('Mobile');
    });
    it('Check [Submit] the [Form] -[Click] on Add Button ', async () => {
        const addUserButton = await addUserPage.addUserButton();
        addUserButton.click();
        const addUserSuccessMessage = await addUserPage.addUserSuccessMessage();
        expect(addUserSuccessMessage).toEqual('!!! User Added Successfully !!!');

    });

});
