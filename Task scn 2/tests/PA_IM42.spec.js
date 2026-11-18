import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Projects & Assets' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transactions' }).click();
  await page.getByRole('link', { name: 'Change budget operative objects' }).click();
  await page.locator('iframe[name="application-ZGUI-IM42-iframe"]').contentFrame().getByRole('textbox', { name: 'Investment program' }).click();
  await page.locator('iframe[name="application-ZGUI-IM42-iframe"]').contentFrame().getByRole('textbox', { name: 'Investment program' }).fill('WW');
  await page.locator('iframe[name="application-ZGUI-IM42-iframe"]').contentFrame().getByRole('textbox', { name: 'Investment program' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-IM42-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year' }).click();
  await page.locator('iframe[name="application-ZGUI-IM42-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year' }).fill('2027');
  await page.locator('iframe[name="application-ZGUI-IM42-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year' }).press('Enter');
   await page.waitForTimeout(20000);
  await page.locator('iframe[name="application-ZGUI-IM42-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();
  await page.waitForTimeout(5000);
});