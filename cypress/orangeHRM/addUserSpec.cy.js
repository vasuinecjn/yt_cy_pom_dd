import LoginPage from "../page_objects/LoginPage.js";

describe("Add user tests", ()=> {

    const testCases = require("../test_case_files/adduserTestCases.json")
    var loginPage;

    beforeEach("Visit to orange hrm site for each test case", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        loginPage = new LoginPage();
    })

    testCases.forEach((testCase) => {
        if (testCase.isSkip) return;

        it(testCase.testName, ()=> {
            loginPage
            .login(testCase.login)
            .navigateToAdminPage()
            .addNewuser(testCase.newUserDetails)
        })
    })

})