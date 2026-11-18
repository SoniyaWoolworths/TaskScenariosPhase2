import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME3);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD3);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'DSI' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting - Financial' }).click();
  await page.getByRole('link', { name: 'Create Advance Return on' }).click();
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Number' }).click();
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Number' }).fill('1000000000');
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().locator('tr').filter({ hasText: /^Document Number of an Accounting Document$/ }).getByLabel('to').click();
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().locator('tr').filter({ hasText: /^Document Number of an Accounting Document$/ }).getByLabel('to').fill('2999999999');
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).click();
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).fill('2026');
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date' }).click();
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date' }).fill('01.05.2026');
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().getByRole('textbox', { name: 'to' }).nth(3).click();
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().getByRole('textbox', { name: 'to' }).nth(3).fill('13.05.2026');
  await page.locator('iframe[name="application-TaxReport-createAdvanceReturnTaxOnSalesPurchas-iframe"]').contentFrame().getByRole('button', { name: 'Execute Emphasized' }).click();
  await page.waitForTimeout(5000);
});