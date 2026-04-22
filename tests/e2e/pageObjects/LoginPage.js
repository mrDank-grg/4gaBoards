const baseUrl = 'http://localhost:3000'

class LoginPage{

  constructor (page){
    this.page = page;
    this.baseUrl = baseUrl;
    this.loginUrl = `${baseUrl}/login`;
    this.dashboardUrl = `${baseUrl}/`;

    this.loginBtn = page.locator("button[title='Log in']");
    this.emailField = page.locator("input[name='emailOrUsername']");
    this.passwordField = page.locator("input[name='password']");
    this.dashboard = page.locator("div[title='Dashboard']");
  }

  async goToLoginPage() {
    await this.page.goto(this.loginUrl);
  }

  async inputLogin(inputs){
    await this.emailField.fill(inputs[0].email)
    await this.passwordField.fill(inputs[0].password)
    await this.loginBtn.click()
  }
}
module.exports = { LoginPage };
