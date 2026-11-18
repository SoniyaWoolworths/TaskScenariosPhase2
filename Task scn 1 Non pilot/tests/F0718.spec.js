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

const usersToTest = [3, 4, 7, 8, 9, 10]; // DSI, PA, RTL
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

for (let i = 0; i < credentials.length; i++) {
    const cred = credentials[i];

    test(`F0718 - ${cred.name} (${cred.username})`, async ({ page }) => {
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



  await page.getByRole('menuitem', { name: 'Transactions' }).click();
  await page.getByRole('link', { name: 'Manage Journal Entries New' }).click();
  await page.locator('[id="fin.gl.journalentry.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_ManageJournalEntryTP--listReportFilter-filterItemControl_BASIC-DocumentDate-input-vhi"]').click();
  await page.locator('div').filter({ hasText: /^Date$/ }).nth(1).click();
  //await page.getByText('16', { exact: true }).click();
  await page.locator('[id="fin.gl.journalentry.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_ManageJournalEntryTP--template::IconTabBar--header-head"]').click();
  await page.getByText('Company CodeContains 1 token 1000 (Woolworths Group Limited)Ledger GroupNo').click();
  await page.locator('[id="fin.gl.journalentry.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_ManageJournalEntryTP--listReportFilter-filterItemControl_BASIC-DocumentDate-input-vhi"]').click();
  await page.locator('div').filter({ hasText: /^Today$/ }).nth(2).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('link', { name: '9385817845' }).click();
  await page.locator('[id="__link97"]').click();
  await page.getByRole('link', { name: 'Post General Journal Entries (For Verification)' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('link', { name: '9385817845' }).click();
  await page.getByRole('link', { name: 'Post General Journal Entries', exact: true }).click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.tabHeader.documentDate-datePicker-icon"]').click();
  await page.getByText('16', { exact: true }).click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.tabHeader.accountingDocumentType-input-vhi"]').click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('SB');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('div').filter({ hasText: /^Journal Entry TypeJE Type Name$/ }).first().click();
  await page.locator('div').filter({ hasText: /^SB$/ }).click();
  await page.getByRole('textbox', { name: 'Transaction Currency' }).click();
  await page.getByRole('textbox', { name: 'Transaction Currency' }).fill('test');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone770-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone770-input-inner"]').fill('40');
  await page.getByText('400000').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone770-input-inner"]').fill('400000 (Sales)');
  await page.getByText('Total Debit:0.00').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone771-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone771-input-inner"]').fill('40');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone771-input-inner"]').press('Enter');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone770-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone770-input-inner"]').fill('10');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone771-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone771-input-inner"]').fill('10');
        });
}










