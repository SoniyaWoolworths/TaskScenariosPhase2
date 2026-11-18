import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME15);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD15);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Display Purchase Requisitions' }).click();
  await page.locator('iframe[name="application-PurchaseRequisition-displayByProject-iframe"]').contentFrame().getByRole('textbox', { name: 'Database prof. Required' }).click();
  await page.locator('iframe[name="application-PurchaseRequisition-displayByProject-iframe"]').contentFrame().getByRole('textbox', { name: 'Database prof. Required' }).fill('ZPS000000001');
  await page.locator('iframe[name="application-PurchaseRequisition-displayByProject-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-PurchaseRequisition-displayByProject-iframe"]').contentFrame().getByRole('textbox', { name: 'WBS Element' }).click();
  await page.locator('iframe[name="application-PurchaseRequisition-displayByProject-iframe"]').contentFrame().getByRole('textbox', { name: 'WBS Element' }).fill('H.1625.02.50');
  await page.locator('iframe[name="application-PurchaseRequisition-displayByProject-iframe"]').contentFrame().getByRole('textbox', { name: 'WBS Element' }).press('Enter');
  await page.locator('iframe[name="application-PurchaseRequisition-displayByProject-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('ME5J');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display Purchase Requisitions' }).click();
  await page.waitForTimeout(5000);
});