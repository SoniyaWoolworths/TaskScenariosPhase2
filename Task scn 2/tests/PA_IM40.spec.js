import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Projects & Assets' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transactions' }).click();
  await page.getByRole('link', { name: 'Change supplement on' }).click();
  await page.locator('iframe[name="application-ZGUI-IM40-iframe"]').contentFrame().getByRole('textbox', { name: 'Investment program' }).click();
  await page.locator('iframe[name="application-ZGUI-IM40-iframe"]').contentFrame().getByRole('textbox', { name: 'Investment program' }).fill('WWNZ');
  await page.locator('iframe[name="application-ZGUI-IM40-iframe"]').contentFrame().getByRole('textbox', { name: 'Investment program' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-IM40-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year' }).click();
  await page.locator('iframe[name="application-ZGUI-IM40-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year' }).fill('2026');
  await page.locator('iframe[name="application-ZGUI-IM40-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year' }).press('Enter');
  await page.waitForTimeout(20000);
  await page.locator('iframe[name="application-ZGUI-IM40-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('IM40');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Change supplement on' }).click();
  await page.waitForTimeout(5000);
});