import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME15);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD15);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Display List of Stock Values' }).click();
  await page.locator('iframe[name="application-MaterialInventory-displayStockValueListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).click();
  await page.locator('iframe[name="application-MaterialInventory-displayStockValueListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).fill('14173');
  await page.locator('iframe[name="application-MaterialInventory-displayStockValueListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).press('Enter');
  await page.locator('iframe[name="application-MaterialInventory-displayStockValueListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'G/L Account' }).click();
  await page.locator('iframe[name="application-MaterialInventory-displayStockValueListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'G/L Account' }).fill('122150');
  await page.locator('iframe[name="application-MaterialInventory-displayStockValueListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'G/L Account' }).press('Enter');
    await page.locator('iframe[name="application-MaterialInventory-displayStockValueListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'G/L Account' }).press('Enter');
      await page.locator('iframe[name="application-MaterialInventory-displayStockValueListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'G/L Account' }).press('Enter');
  await page.locator('iframe[name="application-MaterialInventory-displayStockValueListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'G/L Account' }).press('Enter');

  await page.waitForTimeout(15000);
});