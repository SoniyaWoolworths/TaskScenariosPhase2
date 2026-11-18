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
  await page.getByRole('link', { name: 'Post Transfer Within Company' }).click();
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Required' }).fill('23993618');
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Required' }).press('Enter');
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Date' }).fill('01.04.2026');
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Date' }).press('Enter');
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Value Date' }).fill('21.04.2026');
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Value Date' }).press('Enter');
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).click();
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).fill('21.04.2026');
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).press('Enter');
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('radio', { name: 'New Asset' }).click();
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('textbox', { name: 'Text' }).fill('Test Asset123');
  await page.locator('iframe[name="application-FixedAsset-reclassify-iframe"]').contentFrame().getByRole('button', { name: 'Simulate' }).click(); 
  await page.waitForTimeout(5000);
});