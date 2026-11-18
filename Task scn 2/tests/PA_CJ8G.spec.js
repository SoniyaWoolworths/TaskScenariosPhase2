import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Transactions' }).click();
  await page.getByRole('link', { name: 'Run Actual Settlement Projects -Collective Tile' }).click();
   await page.locator('iframe[name="application-Project-executeActlSettlementCollective-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-Project-executeActlSettlementCollective-iframe"]').contentFrame().getByRole('gridcell', { name: 'AD HOC', exact: true }).getByRole('textbox').click();
  await page.locator('iframe[name="application-Project-executeActlSettlementCollective-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
  await page.locator('iframe[name="application-Project-executeActlSettlementCollective-iframe"]').contentFrame().getByRole('textbox', { name: 'Settlement Period Required' }).click();
  await page.locator('iframe[name="application-Project-executeActlSettlementCollective-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-Project-executeActlSettlementCollective-iframe"]').contentFrame().getByRole('gridcell', { name: 'Row selected. To deselect the' }).locator('div').click();
  await page.locator('iframe[name="application-Project-executeActlSettlementCollective-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-Project-executeActlSettlementCollective-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).click();
  await page.locator('iframe[name="application-Project-executeActlSettlementCollective-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).fill('2026');
  await page.locator('iframe[name="application-Project-executeActlSettlementCollective-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).press('Enter');
  await page.locator('iframe[name="application-Project-executeActlSettlementCollective-iframe"]').contentFrame().getByRole('button', { name: 'Execute Emphasized' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('Run Actual Settlement');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Run Actual Settlement Projects -Collective Tile' }).click();
  await page.waitForTimeout(5000);
});