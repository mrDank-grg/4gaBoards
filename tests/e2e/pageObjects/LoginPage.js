const baseUrl = 'http://localhost:3000'

class LoginPage{

  constructor (page){
    this.page = page;
    this.baseUrl = baseUrl;
    this.loginUrl = `${baseUrl}/login`;
    this.dashboardUrl = `${baseUrl}/`;

    this.loginBtn = this.page.locator("button[title='Log in']");
    this.emailField = this.page.locator("input[name='emailOrUsername']");
    this.passwordField = this.page.locator("input[name='password']");
    this.dashboard = this.page.locator("div[title='Dashboard']");
  }

  async navigateToLoginPage() {
    await this.page.goto(this.loginUrl);
  }

  async loginToDashboard(dataTable){
    await this.emailField.fill(dataTable[0].email)
    await this.passwordField.fill(dataTable[0].password)
    await this.loginBtn.click()
  }
}
module.exports = { LoginPage };
