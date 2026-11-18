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

const usersToTest = [4];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

for (let i = 0; i < credentials.length; i++) {

    const cred = credentials[i];

    test(`KSU2 - ${cred.name} (${cred.username})`, async ({ page }) => {
        // // US4 : 
        await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

        // // TS4 :
        // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

        await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
        await page.getByRole('button', { name: 'Log On' }).click();
        await page.getByRole('button', { name: 'More' }).click();
        await page.getByRole('menuitem', { name: 'Periodic Processing' }).click();
        await page.getByRole('link', { name: 'Change Actual Assessment' }).click();
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Ledger Required' }).click();
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Ledger Required' }).fill('0L');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Cycle Required' }).click();
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Cycle Required' }).fill('BIGW012');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Start Date' }).click();
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Start Date' }).fill('30.06.2025');
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('button', { name: 'Without Check  Emphasized' }).click();
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('button', { name: 'Attach segment' }).dblclick();
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Segment Name Required' }).fill('08');
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Text for a Segment (' }).click();
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Text for a Segment (' }).fill('TEST');
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Assessment Account' }).click();
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Assessment Account' }).fill('692000');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().locator('[id="M0:46:1:2B267::9:31-btn"]').click();
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('option', { name: 'Fixed percentages' }).click();
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('tablist').getByText('Senders/Receivers').click();
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Set' }).first().click();
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Set' }).first().fill('60000000.TOP');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Profit Center' }).first().click();
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Profit Center' }).first().fill('590');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Profit Center' }).nth(1).click();
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Profit Center' }).nth(1).fill('700DC');
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('textbox', { name: 'Profit Center' }).nth(1).press('Enter');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('button', { name: 'Without Check  Emphasized' }).click();
        await page.locator('iframe[name="application-GLAssessmentCycle-changeActual-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
        await page.waitForTimeout(2000);
        await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled&sap-client=300&sap-language=EN#Shell-home');
        await page.getByRole('button', { name: 'Open Search' }).click();
        await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('Change Actual Assessment');
        await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
        await page.getByRole('link', { name: 'Change Actual Assessment' }).click();



    });
}