const locator = require('./locator');

class HomePage {

    constructor(page) {
        this.page = page;
    }

    async findElementByLinkName(linkName) {
        let result = await this.page.findElementByLink(linkName);
        result.click();
        await this.page.wait(10);
        return result;
    }

    async findRootElementId() {
        let result = await this.page.findElementById(locator.rootId);
        return await result.getAttribute('id');
    }

    async findAddUserButton() {
        let result = await this.page.findElementByXPath(locator.addUserXPath);
        return await result.getText();
    }
    async findSearchUserButton() {
        let result = await this.page.findElementByXPath(locator.searchUserXPath);
        return await result.getText();
    }
    async findFindUsersButton() {
        let result = await this.page.findElementByXPath(locator.usersXPath);
        return await result.getText();
    }
}

module.exports = { HomePage };