import { test, expect } from '@playwright/test';

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

const usersToTest = [3];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

for (let i = 0; i < credentials.length; i++) {
    const cred = credentials[i];

    test(`ME33K - ${cred.name} (${cred.username})`, async ({ page }) => {
        // // US4 : 
        await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

        // // TS4 :
        // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

        await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
        await page.getByRole('button', { name: 'Log On' }).click();
        await page.getByRole('button', { name: 'More' }).click();
        await page.getByRole('menuitem', { name: 'Transaction' }).click();
        await page.getByRole('link', { name: 'Display Contracts Condition' }).click();
        await page.waitForTimeout(100);
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Condition Contract Type' }).fill('ZQTA');
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Multiple Selection' }).first().click();
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[2,2]_c"]').click();
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[2,2]_c"]').fill('ZWSD');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[3,2]_c"]').click();
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[3,2]_c"]').fill('ZWPT');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[4,2]_c"]').click();
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[4,2]_c"]').fill('ZWPA');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[5,2]_c"]').click();
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[5,2]_c"]').fill('ZWN2');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[6,2]_c"]').click();
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[6,2]_c"]').fill('ZWN1');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[7,2]_c"]').click();
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[7,2]_c"]').fill('ZWLP');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[8,2]_c"]').click();
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M1:46:1:2B256:1[8,2]_c"]').fill('ZWLN');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Check entries (Enter)' }).click();
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Close' }).click();
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Yes' }).click();
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Created On' }).click();
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Created On' }).fill('01.05.2026');
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByTitle('Date of Condition Contract').nth(1).click();
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByTitle('Date of Condition Contract').nth(1).fill('13.05.2026');
        await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
        await page.waitForTimeout(5000);
        await page.getByRole('button', { name: 'Open Search' }).click();
        await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('Display Purchase Contract');
        await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
        await page.getByRole('link', { name: 'Display Purchase Contract Tile' }).click();


    });
}