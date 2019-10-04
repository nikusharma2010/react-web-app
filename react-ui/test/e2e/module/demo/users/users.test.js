const { UsersPage } = require('./po');
const Page = require('../../../common/basePage');
const expect = require('expect');
const userMock = require('../data/user-data');

const URL = process.env.URL ? process.env.URL : 'Test URL Missing';

let basePage;
let usersPage;
describe('Users Page  ', async function () {
    this.timeout(50000);

    /** Load full page and than check conditions */
    before(async () => {
        basePage = new Page();
        await basePage.visit(URL + 'users');
        usersPage = new UsersPage(basePage);
    });

    it('Check First [Row] of the [User List] and shopuld [NOT] be NULL', async () => {
        const result = await usersPage.findFirstRow();
        expect(result).not.toEqual(null);
    });
    it('Check First [Row] of the [User SHORT NAME] and shopuld [NOT] be NULL', async () => {
        const result = await usersPage.findShortName();
        expect(result).toEqual('KJ');
    });
    it('Check First [Row] of the [User NAME] and shopuld [NOT] be NULL', async () => {
        const result = await usersPage.findName();
        expect(result).toEqual('Kia Japan');
    });
    it('Check First [Row] of the [User MOBILE] and shopuld [NOT] be NULL', async () => {
        const result = await usersPage.findMobile();
        expect(result).toEqual('001234567890');
    });
    it('Check First [Row] of the [User EMAIL] and shopuld [NOT] be NULL', async () => {
        const result = await usersPage.findEmail();
        expect(result).toEqual('homer@thesimpsons.com');
    });
    it('Check First [Row] of the [User View Button] and shopuld [NOT] be NULL', async () => {
        const result = await usersPage.findViewButton();
        expect(result).toEqual('View');
    });

});
