import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME17);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD17);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Retail' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Display Stock Overview Tile' }).click();
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Material Number' }).click();
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Material Number' }).fill('133211');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Material Number' }).press('Enter');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).click();
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).fill('1986');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).press('Enter');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Storage Location' }).click();
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Storage Location' }).fill('1000');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Storage Location' }).press('Enter');
  await page.locator('iframe[name="application-Material-displayStockOverviewInWebGUI-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('display stock overview');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display Stock Overview Tile' }).click();
  await page.waitForTimeout(5000);
});