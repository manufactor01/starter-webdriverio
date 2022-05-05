import { Given, Then, When } from '@cucumber/cucumber';
import LoginPage from '../../pages/mobile/login.page';
import BottomPage from '../../pages/mobile/bottom.page'
import Page from '../../pages/mobile/page';
import PopUpPage from '../../pages/mobile/popUp.page';

const pages: { [key: string]: Page } = { ["login"]: LoginPage };

Given(/^I am on the (\w+) view$/, async (page: string) => {
    await BottomPage.validate();
    await BottomPage.login();
    await pages[page].validate();
});

When(/^I login with (.*?) and (.*?)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message: string) => {
    await expect(PopUpPage.okBtn).toBeExisting();
    await expect(PopUpPage.loginAlert).toHaveTextContaining(message);
});
