const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');

let page;
let login;

Given('admin user has navigated to the login page', async function () {
  page = this.page;
  login = new LoginPage(page);

  await login.goToLoginPage();
  await expect(page).toHaveURL(login.loginUrl);
});

When('admin user logs in with following credentials', async function (dataTable) {
  const loginCredentials = dataTable.hashes();
  await login.inputLogin(loginCredentials);
});

Then('admin user should be navigated to admin panel dashboard', async function () {
  await expect(page).toHaveURL(login.dashboardUrl);
  await expect(login.dashboard).toBeVisible();
});
