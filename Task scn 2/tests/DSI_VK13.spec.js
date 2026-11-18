import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME3);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD3);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'DSI' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Display Condition Tile' }).click();
  await page.locator('iframe[name="application-PriceCondition-displayCondition-iframe"]').contentFrame().getByRole('textbox', { name: 'Condition Type' }).click();
  await page.locator('iframe[name="application-PriceCondition-displayCondition-iframe"]').contentFrame().getByRole('textbox', { name: 'Condition Type' }).fill('ZWSD');
  await page.locator('iframe[name="application-PriceCondition-displayCondition-iframe"]').contentFrame().getByRole('textbox', { name: 'Condition Type' }).press('Enter');
  await page.locator('iframe[name="application-PriceCondition-displayCondition-iframe"]').contentFrame().getByRole('textbox', { name: 'Sales Organization Required' }).fill('1050');
  await page.locator('iframe[name="application-PriceCondition-displayCondition-iframe"]').contentFrame().getByRole('textbox', { name: 'Sales Organization Required' }).press('Enter');
  await page.locator('iframe[name="application-PriceCondition-displayCondition-iframe"]').contentFrame().getByRole('textbox', { name: 'Distribution Channel Required' }).fill('40');
  await page.locator('iframe[name="application-PriceCondition-displayCondition-iframe"]').contentFrame().getByRole('textbox', { name: 'Distribution Channel Required' }).press('Enter');
  await page.locator('iframe[name="application-PriceCondition-displayCondition-iframe"]').contentFrame().getByRole('button', { name: 'Execute Emphasized' }).click();
  await page.waitForTimeout(20000);
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('vk13');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display Condition Tile' }).click();
});