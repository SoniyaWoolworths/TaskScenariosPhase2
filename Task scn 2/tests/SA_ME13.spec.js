import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Display Purchasing Info' }).click();
  await page.locator('iframe[name="application-PurchasingInfoRecord-display-iframe"]').contentFrame().getByRole('textbox', { name: 'Supplier' }).fill('83021008');
  await page.locator('iframe[name="application-PurchasingInfoRecord-display-iframe"]').contentFrame().getByRole('textbox', { name: 'Supplier' }).press('Enter');
  await page.locator('iframe[name="application-PurchasingInfoRecord-display-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).click();
  await page.locator('iframe[name="application-PurchasingInfoRecord-display-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).fill('68183');
  await page.locator('iframe[name="application-PurchasingInfoRecord-display-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).press('Enter');
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('display purchasing info record');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display Purchasing Info' }).click();
  await page.locator('iframe[name="application-PurchasingInfoRecord-display-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).click();
  await page.locator('iframe[name="application-PurchasingInfoRecord-display-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).press('Enter');
  await page.waitForTimeout(5000);
});