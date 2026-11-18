import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const PurchaseOrderPage = require('../page_objects/ZPUR0061');
const inputData = require('../inputs/test_ZPUR0061_inputs.json');
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

const usersToTest = [9, 10]; // RTL
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

for (let i = 0; i < credentials.length; i++) {
    const cred = credentials[i];

    test(`test_ZPUR0061 - ${cred.name} (${cred.username})`, async ({ page }) => {
        const testName = 'test_ZPUR0061';
        const loginPage = new LoginPage(page);
        const purchaseOrderPage = new PurchaseOrderPage(page, testName);

        // Login
        await loginPage.navigateToLogin(testName);
        await loginPage.login(cred.username, cred.password, testName);

        // Search for Transaction
        await purchaseOrderPage.searchForTransaction(inputData.searchTerm);

        // Open ZPUR0061
        await purchaseOrderPage.openZPUR0061();

        // Enter Source File Date
        await purchaseOrderPage.enterSourceFileDate(inputData.sourceFileDate);

        // Enter Sales Org
        await purchaseOrderPage.enterSalesOrg(inputData.salesOrg);

        // Enter Site
        await purchaseOrderPage.enterSite(inputData.site);

        // Enter Posting Date
        await purchaseOrderPage.enterPostingDate(inputData.postingDate);

        // Enter Storage Location
        await purchaseOrderPage.enterStorageLocation(inputData.storageLocation);

        // Execute Process
        await purchaseOrderPage.executeProcess();
    });
}

// test.afterAll(async () => {
//     await generatePDFReport('test_ZPUR0061');
// });
