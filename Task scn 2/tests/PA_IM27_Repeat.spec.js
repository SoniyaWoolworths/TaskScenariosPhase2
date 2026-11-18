import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Projects & Assets' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Config' }).click();
  await page.getByRole('link', { name: 'IM: Open New Approv. Yr-' }).click();
  await page.locator('iframe[name="application-ZGUI-IM27_REPEAT-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
  await page.locator('iframe[name="application-ZGUI-IM27_REPEAT-iframe"]').contentFrame().getByText('FST TEST', { exact: true }).click();
  await page.locator('iframe[name="application-ZGUI-IM27_REPEAT-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
  await page.locator('iframe[name="application-ZGUI-IM27_REPEAT-iframe"]').contentFrame().getByRole('button', { name: 'Execute Emphasized' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('IM: Open New Approv. Yr-');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.waitForTimeout(5000);
});