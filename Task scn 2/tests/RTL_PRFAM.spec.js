import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME17);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD17);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Maintain Price Families Tile' }).click();
  await page.locator('iframe[name="application-RetailSalesPricePlan-maintainPriceFamilies-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-RetailSalesPricePlan-maintainPriceFamilies-iframe"]').contentFrame().getByRole('button', { name: 'Go  Emphasized' }).click();
  await page.locator('iframe[name="application-RetailSalesPricePlan-maintainPriceFamilies-iframe"]').contentFrame().getByRole('gridcell', { name: 'Row selected. To deselect the' }).locator('div').click();
  await page.locator('iframe[name="application-RetailSalesPricePlan-maintainPriceFamilies-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  //await page.locator('iframe[name="application-RetailSalesPricePlan-maintainPriceFamilies-iframe"]').contentFrame().getByRole('button', { name: 'Display' }).click();
  await page.locator('iframe[name="application-RetailSalesPricePlan-maintainPriceFamilies-iframe"]').contentFrame().getByRole('button', { name: 'Continue  Emphasized' }).click();
  await page.locator('iframe[name="application-RetailSalesPricePlan-maintainPriceFamilies-iframe"]').contentFrame().getByRole('button', { name: 'Header Data' }).click();
  await page.locator('iframe[name="application-RetailSalesPricePlan-maintainPriceFamilies-iframe"]').contentFrame().getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('maintain price families');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Maintain Price Families Tile' }).click();
  await page.waitForTimeout(5000);
});