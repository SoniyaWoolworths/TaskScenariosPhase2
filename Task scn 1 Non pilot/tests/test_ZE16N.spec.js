import { test, expect } from '@playwright/test';
const LoginPage = require('../page_objects/LoginPage');
const TransactionPage = require('../page_objects/ZE16N');
const inputData = require('../inputs/test_ZE16N_inputs.json');
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

    test(`testcase - ZE16N - ${cred.name} (${cred.username})`, async ({ page }) => {
        const testName = 'test_ZE16N';
        const loginPage = new LoginPage(page);
        const transactionPage = new TransactionPage(page, testName);

        // Login
        await loginPage.navigateToLogin(testName);
        await loginPage.login(cred.username, cred.password, testName);

        // Navigate to Transaction
        await transactionPage.navigateToTransaction();

        // Open Transaction with
        await transactionPage.openTransactionWith();

        // Enter Table Name
        await transactionPage.enterTableName(inputData.tableName);

        // Execute Transaction
        await transactionPage.executeTransaction();

        // Click Online
        await transactionPage.clickOnline();
    });
}

// test.afterAll(async () => {
//     await generatePDFReport('test_ZE16N');
// });
