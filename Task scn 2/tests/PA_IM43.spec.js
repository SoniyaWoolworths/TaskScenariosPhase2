import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Transactions' }).click();
  await page.getByRole('link', { name: 'Display budget operative' }).click();
  await page.locator('iframe[name="application-ZGUI-IM43-iframe"]').contentFrame().getByRole('textbox', { name: 'Investment program' }).fill('EGL');
  await page.locator('iframe[name="application-ZGUI-IM43-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year' }).click();
  await page.locator('iframe[name="application-ZGUI-IM43-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year' }).fill('2025');
  await page.locator('iframe[name="application-ZGUI-IM43-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-IM43-iframe"]').contentFrame().getByRole('row', { name: 'To select a row, press the space bar. 2 EGL BWS ALH 29,525,491 AUD 29,525,491' }).locator('div').nth(1).click();
  await page.locator('iframe[name="application-ZGUI-IM43-iframe"]').contentFrame().getByRole('button', { name: 'Annual Overview' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('IM43');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display budget operative' }).click();
  await page.waitForTimeout(5000);
});