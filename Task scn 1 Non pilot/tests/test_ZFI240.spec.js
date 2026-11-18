import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const ZFI240Page = require('../page_objects/ZFI240');
const inputData = require('../inputs/test_ZFI240_inputs.json');
const { generatePDFReport } = require('../utility/pdfGenerator');

const allCredentials = [
    { username: process.env.USERNAME1, password: process.env.PASSWORD1, name: 'User1' },
    { username: process.env.USERNAME2, password: process.env.PASSWORD2, name: 'User2' },
    { username: process.env.USERNAME3, password: process.env.PASSWORD3, name: 'User3' },
    { username: process.env.USERNAME4, password: process.env.PASSWORD4, name: 'User4' },
    { username: process.env.USERNAME5, password: process.env.PASSWORD5, name: 'User5' },
    { username: process.env.USERNAME6, password: process.env.PASSWORD6, name: 'User6' },
    { username: process.env.USERNAME7, password: process.env.PASSWORD7, name: 'User7' },
    { username: process.env.USERNAME8, password: process.env.PASSWORD8, name: 'User8' },
    { username: process.env.USERNAME9, password: process.env.PASSWORD9, name: 'User9' },
    { username: process.env.USERNAME10, password: process.env.PASSWORD10, name: 'User10' },
    { username: process.env.USERNAME11, password: process.env.PASSWORD11, name: 'User11' },
    { username: process.env.USERNAME12, password: process.env.PASSWORD12, name: 'User12' },
    { username: process.env.USERNAME13, password: process.env.PASSWORD13, name: 'User13' },
    { username: process.env.USERNAME14, password: process.env.PASSWORD14, name: 'User14' },
    { username: process.env.USERNAME15, password: process.env.PASSWORD15, name: 'User15' },
    { username: process.env.USERNAME16, password: process.env.PASSWORD16, name: 'User16' },
];

const usersToTest = [3, 4, 5, 6, 7, 8, 9, 10];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

for (let i = 0; i < credentials.length; i++) {
    const cred = credentials[i];

    test(`testcase  - ZFI240 - ${cred.name} (${cred.username})`, async ({ page }) => {
        const testName = 'test_ZFI240';
        const loginPage = new LoginPage(page);
        const zfi240Page = new ZFI240Page(page, testName);

        // Login
        await loginPage.navigateToLogin(testName);
        await loginPage.login(cred.username, cred.password, testName);

        // Navigate to Reporting - Financial
        await zfi240Page.navigateToReportingFinancial();

        // Open Transaction List - Cost/Sell
        await zfi240Page.openTransactionListCostSell();

        // Enter Profit Centre
        await zfi240Page.enterProfitCentre(inputData.profitCentre);

        // Enter Company Code
        await zfi240Page.enterCompanyCode(inputData.companyCode);

        // Enter Account Group
        await zfi240Page.enterAccountGroup(inputData.accountGroup);

        // Enter Posting Date
        await zfi240Page.enterPostingDate(inputData.postingDate);

        // Enter Display Layout Variant
        await zfi240Page.enterDisplayLayoutVariant(inputData.displayLayoutVariant);

        // Select Online Data Only
        await zfi240Page.selectOnlineDataOnly();

        // Execute Report
        await zfi240Page.executeReport();
    });
}

// test.afterAll(async () => {
//     await generatePDFReport('test_ZFI240');
// });
