import AdminUserManagementPage from "./AdminUserManagementPage.js"
import Page from "./Page.js"

class DashboardPage extends Page {

    constructor() {
        super()
    }

    navigateToAdminPage() {
        cy.get(this.getLocator("adminLink")).click()
        return new AdminUserManagementPage()
    }

}

export default DashboardPage