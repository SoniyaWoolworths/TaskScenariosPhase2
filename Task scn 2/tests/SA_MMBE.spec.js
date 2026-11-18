import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_SA_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Display Stock Overview Tile' }).click();
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Material Number' }).click();
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Material Number' }).fill('55254');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Material Number' }).press('Enter');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).click();
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).fill('1118');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).press('Enter');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Display Unit of Measure' }).click();
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Display Unit of Measure' }).fill('YLD');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Display Unit of Measure' }).press('Enter');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('MMBE');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display Stock Overview Tile' }).click();
  await page.waitForTimeout(5000);
});