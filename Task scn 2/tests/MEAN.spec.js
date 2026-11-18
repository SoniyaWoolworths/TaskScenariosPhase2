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

const usersToTest = [7];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

for (let i = 0; i < credentials.length; i++) {
    const cred = credentials[i];

    test(`MEAN - ${cred.name} (${cred.username})`, async ({ page }) => {
        // // US4 : 
        await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

        // // TS4 :
        // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

        await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
        await page.getByRole('button', { name: 'Log On' }).click();
        await page.getByRole('button', { name: 'More' }).click();
        await page.getByRole('menuitem', { name: 'Transactions' }).click();
        await page.getByRole('link', { name: 'Delivery Addresses MEAN Tile' }).click();
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('button', { name: 'Create' }).click();
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('textbox', { name: 'Title' }).click();
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('option', { name: 'Mr.', exact: true }).click();
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('textbox', { name: 'Name', exact: true }).click();
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('textbox', { name: 'Name', exact: true }).fill('XYZ Test');
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('textbox', { name: 'Search term 1/' }).click();
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('textbox', { name: 'Search term 1/' }).fill('XYZ');
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term 2' }).click();
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term 2' }).fill('Test');
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('textbox', { name: 'Street/House Number' }).click();
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('textbox', { name: 'Street/House Number' }).fill('123 Green Avenue');
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('textbox', { name: 'Country/Region Required' }).click();
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('textbox', { name: 'Country/Region Required' }).fill('AU');
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('textbox', { name: 'Country/Region Required' }).press('Enter');
        await page.locator('iframe[name="application-ZGUI-MEAN-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();




    });
}