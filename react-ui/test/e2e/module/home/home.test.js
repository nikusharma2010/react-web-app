const { HomePage } = require('./po');
const Page = require('../../common/basePage');
const expect = require('expect');

const URL = process.env.URL ? process.env.URL : 'Test URL Missing';

let basePage;
let homePage;
describe('Home Page', async function () {
    this.timeout(50000);

    /** Load full page and than check conditions */
    before(async () => {
        basePage = new Page();
        await basePage.visit(URL);
        homePage = new HomePage(basePage);
    });

    it('Check the root element present in dom', async () => {
        const result = await homePage.findRootElementId();
        expect(result).toEqual('root');
    });

    it('Check [add user] navigation and its [label]', async () => {
        const result = await homePage.findAddUserButton();
        expect(result).toEqual('Add User');
    });

    it('Check [search user] navigation and its [label]', async () => {
        const result = await homePage.findSearchUserButton();
        expect(result).toEqual('Search User');
    });

    it('Check [users] navigation and its [label]', async () => {
        const result = await homePage.findFindUsersButton();
        expect(result).toEqual('Users');
    });

    it('Check [add user] Link', async () => {
        await homePage.findElementByLinkName('Add User');
        const newURL = URL + 'add';
        expect(newURL).toEqual(await basePage.getDriver().getCurrentUrl());
    });

    it('Check [Search user] Link', async () => {
        await homePage.findElementByLinkName('Search User');
        const newURL = URL + 'find';
        expect(newURL).toEqual(await basePage.getDriver().getCurrentUrl());
    });

    it('Check [User] Link', async () => {
        await homePage.findElementByLinkName('Users');
        const newURL = URL + 'users';
        expect(newURL).toEqual(await basePage.getDriver().getCurrentUrl());

    });
});
