import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Create Asset Tile' }).click();
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Class' }).fill('1000');
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Class' }).press('Enter');
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().getByTitle('Asset Description', { exact: true }).fill('Landlord');
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().getByRole('tab', { name: 'Time-dependent' }).locator('span').click();
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().getByRole('button', { name: 'Go  Emphasized' }).click();
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().getByRole('gridcell', { name: 'Row selected. To deselect the' }).locator('div').click();
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().getByRole('tab', { name: 'Allocations' }).locator('span').click();
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-FixedAsset-create-iframe"]').contentFrame().getByTitle('Exit (Enter)').click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('create asset');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Create Asset Tile' }).click();
  await page.waitForTimeout(5000);

});