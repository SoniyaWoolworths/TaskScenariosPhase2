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

const usersToTest = [7, 8]; // PA
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

for (let i = 0; i < credentials.length; i++) {
  const cred = credentials[i];
  test(`F1974 - ${cred.name} (${cred.username})`, async ({ page }) => {
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



  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'WBS Element Overview Tile' }).click();
  await page.getByRole('textbox', { name: 'WBS Element:' }).click();
  await page.getByRole('textbox', { name: 'WBS Element:' }).fill('H.7002');
  await page.getByRole('textbox', { name: 'WBS Element:' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('button', { name: 'Row Actions Details' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('option', { name: 'Status' }).click();
  await page.getByRole('option', { name: 'Project' }).click();
  await page.getByRole('option', { name: 'Milestones' }).click();
  await page.getByRole('option', { name: 'Networks/Orders' }).click();
    await page.getByRole('option', { name: 'Purchase Document Items' }).click();
    await page.getByRole('option', { name: 'Network Activities' }).click();
    await page.getByRole('option', { name: 'User Fields' }).click();
    await page.waitForTimeout(5000);
    });
}










