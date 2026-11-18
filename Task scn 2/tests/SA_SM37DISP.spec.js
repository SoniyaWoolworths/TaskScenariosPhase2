import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'SM37DISP Display And Monitor' }).click();
  await page.locator('iframe[name="application-ZGUI-sm37disp-iframe"]').contentFrame().getByRole('textbox', { name: 'User Name' }).click();
  await page.locator('iframe[name="application-ZGUI-sm37disp-iframe"]').contentFrame().getByRole('textbox', { name: 'User Name' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-sm37disp-iframe"]').contentFrame().getByRole('textbox', { name: 'User Name' }).fill('*');
  await page.locator('iframe[name="application-ZGUI-sm37disp-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.waitForTimeout(50000);
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('SM37DISP');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'SM37DISP Display And Monitor' }).click();
  await page.waitForTimeout(5000);
});