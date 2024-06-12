describe("login tests", ()=> {

    const testCases = require("../fixtures/login.json")
    loginPage;
    beforeEach("Visit organge hrm for each test case", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    testCases.forEach((testCase) => {
        if (testCase.skip) return;
        it(testCase.testName, ()=> {
            cy.get("input[name='username']").clear().type(testCase.userName);
            cy.get("input[name='password']").type(testCase.password)
            cy.get("button[type='submit']").click()
            cy.get(".oxd-topbar-header-breadcrumb-module")
            .should("be.visible")
            .should("contain.text", testCase.validate_message)
            cy.get("span.oxd-userdropdown-tab").click()
            cy.get("a[href*='logout']").click()
        })
    })

})