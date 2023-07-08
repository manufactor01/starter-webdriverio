import { Given, Then, When } from '@cucumber/cucumber';
import LoginPage from '../pages/login.page';
import Page from '../pages/page';
import SecurePage from '../pages/secure.page';


const pages: { [key: string]: Page } = { ["login"]: LoginPage };

Given(/^I am on the (\w+) page$/, async (page: string) => {
    await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message: string) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
