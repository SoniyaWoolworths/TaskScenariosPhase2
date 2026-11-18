import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'SP01 Display Spool Requests' }).click();
  await page.locator('iframe[name="application-ZGUI-sp01-iframe"]').contentFrame().getByRole('textbox', { name: 'Created On' }).click();
  await page.locator('iframe[name="application-ZGUI-sp01-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-sp01-iframe"]').contentFrame().getByLabel('June 2026 Friday Week 23').getByText('5').click();
  await page.locator('iframe[name="application-ZGUI-sp01-iframe"]').contentFrame().getByRole('textbox', { name: 'to' }).click();
  await page.locator('iframe[name="application-ZGUI-sp01-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-sp01-iframe"]').contentFrame().getByLabel('June 2026 Friday Week 23').getByText('5').click();
  // await page.pause();
 await page.locator('iframe[name="application-ZGUI-sp01-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
 // await page.pause();
 await page.waitForTimeout(5000);
});