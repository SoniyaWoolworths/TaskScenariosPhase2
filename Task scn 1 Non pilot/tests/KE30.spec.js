import { test, expect } from '@playwright/test';

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

const usersToTest = [3, 4, 5, 6, 9, 10]; // DSI, EEI, RTL
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

for (let i = 0; i < credentials.length; i++) {
    const cred = credentials[i];

    test(`KE30 - ${cred.name} (${cred.username})`, async ({ page }) => {
  // US4 :\n
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

  // TS4 :\n

  // await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);


  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Run Profitability Report' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Operating concern Required' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Operating concern Required' }).fill('1000');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Operating concern Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('cell', { name: 'ZPA-1000' }).getByRole('button').dblclick({ force: true });
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'PCA Hierarchy' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'PCA Hierarchy' }).fill('SMKT-SOPS');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Forecast Version Required' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Forecast Version Required' }).fill('600');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).fill('2025');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Period Required' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Period Required' }).fill('12');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'From Business Unit' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'From Business Unit' }).fill('FLP');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'To Business Unit' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'To Business Unit' }).fill('FLP');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'From Division' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'From Division' }).fill('SMKT');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'To Division' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'To Division' }).fill('SMKT');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Trading Department' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('textbox', { name: 'Trading Department' }).fill('010');
  await page.locator('iframe[name="application-ProfitabilityAnalysis-executeReport-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
    });
}








