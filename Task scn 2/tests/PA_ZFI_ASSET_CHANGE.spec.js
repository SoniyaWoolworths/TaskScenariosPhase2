import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Projects & Assets' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'FAR Asset Mass Changes' }).click();
  const frame = await page.locator('iframe[name="application-ZGUI-ZFI_ASSET_CHANGE-iframe"]');
  await frame.contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await frame.contentFrame().getByRole('button', { name: 'OK' }).click();
  await frame.contentFrame().locator('input[type="file"]').setInputFiles('testdata/ZFI_ASSET_CHANGE.xlsx');
  await frame.contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
});