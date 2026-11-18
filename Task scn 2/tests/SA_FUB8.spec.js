import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME12);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD12);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Reverse Journal Entries Cross' }).click();
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Reversal Reason Required' }).click();
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Reversal Reason Required' }).fill('01');
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Reversal Reason Required' }).press('Enter');
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Cross-Comp.Code No.' }).fill('1000');
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Cross-Comp.Code No.' }).press('Enter');
  /*await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).click();
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).fill('2026');
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).press('Enter');*/
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('button', { name: 'Post  Emphasized' }).click();
  await page.waitForTimeout(5000);
});
