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

const usersToTest = [8];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

for (let i = 0; i < credentials.length; i++) {
    const cred = credentials[i];

    test(`AR31 - ${cred.name} (${cred.username})`, async ({ page }) => {
        // // US4 : 
        await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

        // // TS4 :
        // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

        await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
        await page.getByRole('button', { name: 'Log On' }).click();
        await page.getByRole('button', { name: 'More' }).click();
        await page.getByRole('menuitem', { name: 'Reporting - Review and Analysis' }).click();
        await page.getByRole('link', { name: 'Edit Worklist Tile' }).click();
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('textbox', { name: 'Worklist' }).fill('000000653815');
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('button', { name: 'List' }).click();
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('button', { name: 'Edit' }).click();

        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('cell', { name: 'Worklist', exact: true }).click();
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByText('... create', { exact: true }).click();

        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('textbox', { name: 'WL name Required' }).click();
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('textbox', { name: 'WL name Required' }).fill('653567 TEST01');
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().locator('td').filter({ hasText: 'To select a row, press the' }).nth(5).click();
        // await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByLabel('Task selection').locator('table').filter({ hasText: 'To select a row, press the' }).click();
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Date Required' }).fill('08.05.2026');
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).click();
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).fill('08.05.2026');
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Val. Date Required' }).click();
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Val. Date Required' }).fill('08.05.2026');
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('textbox', { name: 'Transfer var. Required' }).click();
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('textbox', { name: 'Transfer var. Required' }).fill('1');
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('textbox', { name: 'Company code Required' }).click();
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('textbox', { name: 'Company code Required' }).fill('1000');
        await page.locator('iframe[name="application-AssetWorklist-edit-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
        await page.waitForTimeout(2000);
        await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled&sap-client=300&sap-language=EN#Shell-home');

        await page.getByRole('button', { name: 'Open Search' }).click();
        await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('AR31');
        await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
        await page.getByRole('link', { name: 'Edit Worklist Tile' }).click();




    });
}