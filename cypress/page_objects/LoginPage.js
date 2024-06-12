import DashboardPage from "./DashboardPage.js";
import Page from "./Page.js"

class LoginPage extends Page {

    constructor() {
        super();
    }

    login(login) {
        cy.get(this.getLocator("userNameTextBox")).clear().type(login.userName)
        cy.get(this.getLocator("passwordTextBox")).clear().type(login.password)
        cy.get(this.getLocator("loginButton")).click()
        return new DashboardPage()
    }

}

export default LoginPage;