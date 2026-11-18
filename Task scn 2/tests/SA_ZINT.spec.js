import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Interface Control Transaction' }).click();
  await page.locator('iframe[name="application-ZGUI-zint-iframe"]').contentFrame().getByRole('textbox', { name: 'IDoc number' }).click();
  await page.locator('iframe[name="application-ZGUI-zint-iframe"]').contentFrame().getByRole('textbox', { name: 'IDoc number' }).fill('2793603307');
  await page.locator('iframe[name="application-ZGUI-zint-iframe"]').contentFrame().getByRole('textbox', { name: 'IDoc number' }).press('Enter');
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('ZINT');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Interface Control Transaction' }).click();
  await page.waitForTimeout(5000);
});