import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_SA_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Display Supplier Invoice' }).click();
  await page.locator('iframe[name="application-SupplierInvoice-displayAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Invoice Document No.' }).fill('5190084257');
  await page.locator('iframe[name="application-SupplierInvoice-displayAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).click();
  await page.locator('iframe[name="application-SupplierInvoice-displayAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).fill('2026');
  await page.locator('iframe[name="application-SupplierInvoice-displayAdvanced-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).press('Enter');
  await page.locator('iframe[name="application-SupplierInvoice-displayAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Follow-On Documents' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('MIR4');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display Supplier Invoice' }).click();
});