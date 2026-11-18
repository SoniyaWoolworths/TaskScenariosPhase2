import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Depreciation Forecast Tile' }).click();
  await page.locator('iframe[name="application-AssetReport-simulatedDepreciation-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
  await page.locator('iframe[name="application-AssetReport-simulatedDepreciation-iframe"]').contentFrame().getByText('SAP&001').dblclick();
  await page.locator('iframe[name="application-AssetReport-simulatedDepreciation-iframe"]').contentFrame().getByRole('textbox', { name: 'Cost center' }).click();
  await page.locator('iframe[name="application-AssetReport-simulatedDepreciation-iframe"]').contentFrame().getByRole('textbox', { name: 'Cost center' }).fill('6349');
  await page.locator('iframe[name="application-AssetReport-simulatedDepreciation-iframe"]').contentFrame().getByRole('textbox', { name: 'Cost center' }).press('Enter');
  await page.locator('iframe[name="application-AssetReport-simulatedDepreciation-iframe"]').contentFrame().getByRole('textbox', { name: 'to' }).nth(4).click();
  await page.locator('iframe[name="application-AssetReport-simulatedDepreciation-iframe"]').contentFrame().getByRole('textbox', { name: 'to' }).nth(4).fill('6356');
  await page.locator('iframe[name="application-AssetReport-simulatedDepreciation-iframe"]').contentFrame().getByRole('textbox', { name: 'to' }).nth(4).press('Enter');
  await page.locator('iframe[name="application-AssetReport-simulatedDepreciation-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.waitForTimeout(5000);
});