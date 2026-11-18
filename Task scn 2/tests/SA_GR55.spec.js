import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting - Financial' }).click();
  await page.getByRole('link', { name: 'GR55 Execute Group Report' }).click();
  //await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Report Group' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Report Group' }).fill('0B01');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Report Group' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('GR55');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'GR55 Execute Group Report' }).click();
  await page.waitForTimeout(5000);
});