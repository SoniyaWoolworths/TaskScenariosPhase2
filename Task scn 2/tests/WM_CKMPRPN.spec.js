import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME15);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD15);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Enter Future Prices Tile' }).click();
  await page.locator('iframe[name="application-Material-editFuturePrice-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).click();
  await page.locator('iframe[name="application-Material-editFuturePrice-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).fill('709251');
  await page.locator('iframe[name="application-Material-editFuturePrice-iframe"]').contentFrame().getByRole('textbox', { name: 'Article' }).press('Enter');
  await page.locator('iframe[name="application-Material-editFuturePrice-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).click();
  await page.locator('iframe[name="application-Material-editFuturePrice-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).fill('1086');
  await page.locator('iframe[name="application-Material-editFuturePrice-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).press('Enter');
  await page.locator('iframe[name="application-Material-editFuturePrice-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
});