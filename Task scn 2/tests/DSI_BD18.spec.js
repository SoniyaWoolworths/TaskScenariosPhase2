import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME4);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD4);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Send General Ledger Account' }).click();
  await page.locator('iframe[name="application-ZGUI-BD18-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
  await page.locator('iframe[name="application-ZGUI-BD18-iframe"]').contentFrame().getByText('NZ PAYROLL 1', { exact: true }).click();
  await page.locator('iframe[name="application-ZGUI-BD18-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
  await page.locator('iframe[name="application-ZGUI-BD18-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
await page.locator('iframe[name="application-ZGUI-BD18-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
//await page.locator('iframe[name="application-ZGUI-BD18-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).dblclick();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('we02');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display IDoc WE02 Tile' }).click();
  await page.locator('iframe[name="application-ZGUI-BD18-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('BD18');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Send General Ledger Account' }).click();
  await page.waitForTimeout(5000);
});