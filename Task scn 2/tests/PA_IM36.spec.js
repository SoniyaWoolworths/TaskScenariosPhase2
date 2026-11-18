import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill('T_PA_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Projects & Assets' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transactions' }).click();
  await page.getByRole('link', { name: 'Display plan on prog.' }).click();
  await page.locator('iframe[name="application-ZGUI-IM36-iframe"]').contentFrame().getByRole('textbox', { name: 'Investment program' }).click();
  await page.locator('iframe[name="application-ZGUI-IM36-iframe"]').contentFrame().getByRole('textbox', { name: 'Investment program' }).fill('WWNZ');
  await page.locator('iframe[name="application-ZGUI-IM36-iframe"]').contentFrame().getByRole('textbox', { name: 'Investment program' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-IM36-iframe"]').contentFrame().getByRole('textbox', { name: 'Version Required' }).fill('201');
  await page.locator('iframe[name="application-ZGUI-IM36-iframe"]').contentFrame().getByRole('textbox', { name: 'Version Required' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-IM36-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year' }).click();
  await page.locator('iframe[name="application-ZGUI-IM36-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year' }).fill('2025');
  await page.locator('iframe[name="application-ZGUI-IM36-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year' }).press('Enter');
  await page.waitForTimeout(5000);
});