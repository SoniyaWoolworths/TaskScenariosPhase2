import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { generatePDFReport } from '../utility/pdfGenerator.js';

const allCredentials = [
    { username: process.env.USERNAME1, password: process.env.PASSWORD1, name: 'User1' }, //BankingAccountant
    { username: process.env.USERNAME2, password: process.env.PASSWORD2, name: 'User2' }, //OHDAccountant
    { username: process.env.USERNAME3, password: process.env.PASSWORD3, name: 'User3' }, //DSISystemSpecialist
    { username: process.env.USERNAME4, password: process.env.PASSWORD4, name: 'User4' }, //DSIManager
    { username: process.env.USERNAME5, password: process.env.PASSWORD5, name: 'User5' }, //EEIAccountant
    { username: process.env.USERNAME6, password: process.env.PASSWORD6, name: 'User6' }, //EEIAccountingManager
    { username: process.env.USERNAME7, password: process.env.PASSWORD7, name: 'User7' }, //PAAccountant
    { username: process.env.USERNAME8, password: process.env.PASSWORD8, name: 'User8' }, //PAAccountingManager
    { username: process.env.USERNAME9, password: process.env.PASSWORD9, name: 'User9' }, //RetailAccountant
    { username: process.env.USERNAME10, password: process.env.PASSWORD10, name: 'User10' }, //RetailSnrAccountant
    { username: process.env.USERNAME11, password: process.env.PASSWORD11, name: 'User11' }, //ServiceAccountant
    { username: process.env.USERNAME12, password: process.env.PASSWORD12, name: 'User12' }, //ServiceAccountingManager
    { username: process.env.USERNAME13, password: process.env.PASSWORD13, name: 'User13' }, //LeasingAccountant
    { username: process.env.USERNAME14, password: process.env.PASSWORD14, name: 'User14' }, //LeasingAccountingManager
    { username: process.env.USERNAME15, password: process.env.PASSWORD15, name: 'User15' }, //WholesaleAndManufacturingAccountant
    { username: process.env.USERNAME16, password: process.env.PASSWORD16, name: 'User16' }, //WholesaleAndManufacturingAccountingManager
];

const usersToTest = [7];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

let testData = {
    testName: 'ABT1N',
    credentialName: '',
    credentialUsername: '',
    screenshotDir: '',
    screenshotCount: 1,
    status: ''
};

for (let i = 0; i < credentials.length; i++) {

    const cred = credentials[i];

    test(`ABT1N - ${cred.name} (${cred.username})`, async ({ page }, testInfo) => {
        try {
            // // US4 : 
            const link = 'https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled'
            await page.goto(link);

            // // TS4 :
            // const link = 'https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled'
            // await page.goto(link);

            await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
            await page.getByRole('textbox', { name: 'Password' }).click();
            await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
            await page.getByRole('button', { name: 'Log On' }).click();
            await page.waitForTimeout(1000);
            const screenshotDir = path.join('C:\\Users\\1494346\\Desktop\\FST_Task Scenarios\\screenshots', 'ABT1N');
            if (!fs.existsSync(screenshotDir)) {
                fs.mkdirSync(screenshotDir, { recursive: true });
            }
            let screenshotCount = 1;
            // Store test data for afterAll
            testData.credentialName = cred.name;
            testData.credentialUsername = cred.username;
            testData.screenshotDir = screenshotDir;

            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.getByRole('button', { name: 'More' }).click();
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.getByRole('menuitem', { name: 'Transactions' }).click();
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.getByRole('link', { name: 'Post Transfer Across Company' }).click();
            await page.waitForTimeout(500);
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.waitForTimeout(500);
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Required' }).click();
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Required' }).fill('23993695');
            // await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Required' }).press('Enter');
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.waitForTimeout(500);
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Date' }).click();
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Date' }).fill('15.04.2026');
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.waitForTimeout(500);
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).click();
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).fill('15.04.2026');
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.waitForTimeout(500);
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Value Date' }).click();
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Value Date' }).fill('15.04.2026');
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.waitForTimeout(500);
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
            // await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.waitForTimeout(500);
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Main Number of Target Asset' }).click();
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Main Number of Target Asset' }).fill('23968643');
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.waitForTimeout(500);
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Subno. of Target Asset' }).click();
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().locator('div').filter({ hasText: /^FST TEST 3$/ }).dblclick();
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('tablist').getByText('Partial Transfer').click();
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.waitForTimeout(500);
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('textbox', { name: 'Amount Posted' }).fill('1000');
            await page.waitForTimeout(500);
            await page.waitForTimeout(500);
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('radio', { name: 'Curr.-Year Acquisition' }).click();
            await page.waitForTimeout(1000);
            await page.locator('iframe[name="application-FixedAsset-postTransfer-iframe"]').contentFrame().getByRole('button', { name: 'Simulate' }).click();
            await page.screenshot({ path: path.join(screenshotDir, `screenshot_${screenshotCount++}.png`) });

            // Update testData with final screenshot count
            testData.screenshotCount = screenshotCount;

        } catch (error) {
            testData.screenshotCount = screenshotCount;
            console.error('Test failed:', error);
            throw error;
        } finally {
            // Determine status based on testInfo after test execution
            // testInfo.status will be 'passed' or 'failed' after the test completes
            testData.status = testInfo.status === 'passed' ? 'PASSED' : 'FAILED';
        }

        // await page.waitForTimeout(2000);
        // await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled&sap-client=300&sap-language=EN#Shell-home');
        // await page.getByRole('button', { name: 'Open Search' }).click();
        // await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('ZFIALHTB');
        // await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
        // await page.getByRole('link', { name: 'ALH TB Outbound Interface' }).click();

    });
}

// Generate PDF report after all tests
test.afterAll(async () => {
    await generatePDFReport(
        testData.testName,
        testData.credentialName,
        testData.credentialUsername,
        testData.screenshotDir,
        testData.screenshotCount,
        testData.status
    );
});