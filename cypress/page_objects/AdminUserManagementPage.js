import Page from "./Page.js"
import { faker, fi } from '@faker-js/faker';

class AdminUserManagementPage extends Page {

    constructor() {
        super()
    }

    addNewuser(addUser) {
        cy.get(this.getLocator("addUserButton")).click()
        cy.wait(2000)
        cy.get(this.getLocator("userRoleDropDown")).click()
        cy.wait(2000)
        if (addUser.userRole == "Admin") {
            cy.get(this.getLocator("userRoleDropDownSelectAdmin")).click()
        }
        else if(addUser.userRole == "ESS") {
            cy.get(this.getLocator("userRoleDropDownSelectESS")).click()
        }
        cy.wait(2000)
        cy.get(this.getLocator("employeeNameTextBox")).type(addUser.employeeName)
        cy.wait(2000)
        cy.get(this.getLocator("employeeSearchResultElement")).click()
        cy.wait(2000)
        cy.get(this.getLocator("statusDropDown")).click();
        cy.wait(2000)
        cy.contains(addUser.status).click();
        cy.wait(2000)
        cy.get(this.getLocator("userNameTextBox")).type(faker.internet.userName());
        cy.wait(2000)
        cy.get(this.getLocator("password")).type(addUser.password);
        cy.wait(2000)
        cy.get(this.getLocator("confirmPassword")).type(addUser.confirmPassword);
        cy.wait(2000)
        cy.get(this.getLocator("addUserSave")).click();
        cy.wait(4000)
        cy.url().should("contain", "viewSystemUsers");
        return this;
    }

}

export default AdminUserManagementPage