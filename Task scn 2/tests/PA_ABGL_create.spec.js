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
  await page.getByRole('link', { name: 'Post Credit Memo In Year of' }).click();
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Required' }).click();
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Required' }).fill('52527197');
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Required' }).press('Enter');
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('button', { name: 'Confirm' }).click();
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('2000');
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('textbox', { name: 'Accounting Principle' }).fill('LG');
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('textbox', { name: 'Accounting Principle' }).press('Enter');
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Date' }).fill('01.04.2026');
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Date' }).press('Enter');
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('textbox', { name: 'Amount Posted' }).fill('200');
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('textbox', { name: 'Amount Posted' }).press('Enter');
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByTitle('Quantity').fill('1');
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByTitle('Quantity').press('Enter');
  await page.locator('iframe[name="application-FixedAsset-creditMemoInYear-iframe"]').contentFrame().getByRole('button', { name: 'Post  Emphasized' }).click();
  // await page.pause();

});