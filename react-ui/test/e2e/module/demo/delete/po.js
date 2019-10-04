const locator = require('./locator');

class DeleteUserPage {

    constructor(page) {
        this.page = page;
    }

    async deleteUserScreenHeader() {
        let result = await this.page.findElementByXPath(locator.deleteUserScreenHeader);
        return await result.getText();
    }
    async deleteUserLabel() {
        let result = await this.page.findElementByXPath(locator.deleteUserLabel);
        return await result.getText();
    }
    async deleteUserInputText() {
        return await this.page.findElementByXPath(locator.deleteUserInputText);
    }

    async deleteUserSearchButton() {
        return await this.page.findElementByXPath(locator.deleteUserSearchButton);
    }
    async deleteUserBackButton() {
        let result = await this.page.findElementByLink(locator.deleteUserBackButton);
        return result.getText();
    }
    async deleteUserDeleteButton() {
        let result = await this.page.findElementByXPath(locator.deleteUserDeleteButton);
        return result;
    }
    async userReceivedEmployeeNo() {
        let label = await this.page.findElementByXPath(locator.userReceivedEmployeeNoLabel);
        let value = await this.page.findElementByXPath(locator.userReceivedEmployeeNoValue);
        const result = { label: await label.getText(), value: await value.getText() };
        return result;
    }
    async userReceivedEmployeeName() {
        let label = await this.page.findElementByXPath(locator.userReceivedNameLabel);
        let value = await this.page.findElementByXPath(locator.userReceivedNameValue);
        const result = { label: await label.getText(), value: await value.getText() };
        return result;
    }
    async userReceivedEmployeeEmail() {
        let label = await this.page.findElementByXPath(locator.userReceivedEmailLabel);
        let value = await this.page.findElementByXPath(locator.userReceivedEmailValue);
        const result = { label: await label.getText(), value: await value.getText() };
        return result;
    }
    async userReceivedEmployeeMobileNo() {
        let label = await this.page.findElementByXPath(locator.userReceivedMobileLabel);
        let value = await this.page.findElementByXPath(locator.userReceivedMobileValue);
        const result = { label: await label.getText(), value: await value.getText() };
        return result;
    }
    async deleteUserSuccessMessage() {
        let result = await this.page.findElementByXPath(locator.deleteUserSuccessMessage);
        return result.getText();
    }
}


module.exports = { DeleteUserPage };