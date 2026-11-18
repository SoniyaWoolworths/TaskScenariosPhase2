import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Display Sales Orders Tile' }).click();
  await page.locator('iframe[name="application-SalesOrder-display-iframe"]').contentFrame().getByRole('textbox', { name: 'Order' }).fill('901197376');
  await page.locator('iframe[name="application-SalesOrder-display-iframe"]').contentFrame().getByRole('textbox', { name: 'Order' }).press('Enter');
  await page.waitForTimeout(5000);
});