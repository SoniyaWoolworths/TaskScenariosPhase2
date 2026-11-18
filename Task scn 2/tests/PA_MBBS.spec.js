import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Display List of Stock Values' }).click();
  await page.locator('iframe[name="application-MaterialInventory-displayValuatedSalesOrderProjectStockInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).fill('EQL*');
  await page.locator('iframe[name="application-MaterialInventory-displayValuatedSalesOrderProjectStockInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).press('Enter');
  await page.locator('iframe[name="application-MaterialInventory-displayValuatedSalesOrderProjectStockInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'WBS Element' }).click();
  await page.locator('iframe[name="application-MaterialInventory-displayValuatedSalesOrderProjectStockInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'WBS Element' }).fill('KD008*');
  await page.locator('iframe[name="application-MaterialInventory-displayValuatedSalesOrderProjectStockInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'WBS Element' }).press('Enter');
  await page.locator('iframe[name="application-MaterialInventory-displayValuatedSalesOrderProjectStockInWebGUI-iframe"]').contentFrame().getByTitle('F8').click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('MBBS');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display List of Stock Values' }).click();
  await page.waitForTimeout(5000);
});