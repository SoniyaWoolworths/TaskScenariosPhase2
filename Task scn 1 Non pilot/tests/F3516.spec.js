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

const usersToTest = [3, 4, 5, 6, 7, 8, 9, 10];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

for (let i = 0; i < credentials.length; i++) {
    const cred = credentials[i];

    test(`F3516 - ${cred.name} (${cred.username})`, async ({ page }) => {
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
  await page.getByRole('link', { name: 'Manage Profit Centers Tile' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('row', { name: 'Item Selection 100 NSW -NORTH' }).getByLabel('Item Selection').click();
  await page.getByRole('gridcell', { name: 'Navigation' }).first().click();
  // await page.locator('[id="fin.gl.profitcenter.manage.v2::sap.suite.ui.generic.template.ListReport.view.ListReport::C_ProfitCenterTP--template:::ListReportTable:::ColumnListItem-__clone274-TypeCell"]').getByTitle('Navigation').click();
  await page.getByRole('option', { name: 'Indicators' }).click();
  await page.getByRole('option', { name: 'Organizational Unit' }).click();
  await page.getByRole('option', { name: 'Address' }).click();
  await page.getByRole('option', { name: 'Communication' }).click();
  await page.getByRole('option', { name: 'Company Codes' }).click();
  await page.getByRole('option', { name: 'Translation' }).click();
  await page.getByRole('option', { name: 'Change Log' }).click();
  await page.waitForTimeout(5000);
    });
}








