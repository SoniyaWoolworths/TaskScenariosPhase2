import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Transactions' }).click();
  await page.getByRole('link', { name: 'Display Investment Program IM03 Tile' }).click();
  await page.locator('iframe[name="application-ZGUI-IM03-iframe"]').contentFrame().getByRole('textbox', { name: 'Inv.program Required' }).fill('EGL');
  await page.locator('iframe[name="application-ZGUI-IM03-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year Required' }).click();
  await page.locator('iframe[name="application-ZGUI-IM03-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year Required' }).fill('2026');
  await page.locator('iframe[name="application-ZGUI-IM03-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year Required' }).press('Enter');
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('display investment program');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display Investment Program IM03 Tile' }).click();
  await page.locator('iframe[name="application-ZGUI-IM03-iframe"]').contentFrame().getByRole('textbox', { name: 'Inv.program Required' }).press('Enter');
  await page.waitForTimeout(5000);
});