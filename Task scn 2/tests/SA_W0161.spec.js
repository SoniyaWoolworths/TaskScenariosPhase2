import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting - Financial' }).click();
  await page.getByRole('link', { name: 'Balance Sheet/Income' }).click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Hierarchy ID Required' }).click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Hierarchy ID Required' }).fill('ZW01');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Hierarchy ID Required' }).press('Enter');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByText('Contains 1 itemACT01').click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().locator('#sapwd_main_window_root_-asso').getByText('Contains 1 itemACT01').click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().locator('#WDE8-icon').click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).click();
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).fill('400');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).press('Enter');
  await page.locator('iframe[name="application-FinancialStatement-displayGrid-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
    await page.waitForTimeout(5000);
});