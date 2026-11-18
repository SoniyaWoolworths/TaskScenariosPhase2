import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill('T_SA_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Article Price Change' }).click();
  await page.locator('iframe[name="application-MaterialLedgerDocument-analyzePriceChangeDocuments-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
  await page.locator('iframe[name="application-MaterialLedgerDocument-analyzePriceChangeDocuments-iframe"]').contentFrame().getByText('CKMPCSEARCH').click();
  await page.locator('iframe[name="application-MaterialLedgerDocument-analyzePriceChangeDocuments-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
  await page.locator('iframe[name="application-MaterialLedgerDocument-analyzePriceChangeDocuments-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('CKMPCSEARCH');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Article Price Change' }).click();

});