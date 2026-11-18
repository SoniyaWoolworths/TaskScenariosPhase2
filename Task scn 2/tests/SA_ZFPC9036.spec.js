import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting - Financial' }).click();
  await page.getByRole('link', { name: 'Split by Accounts Tile' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWSplitByAccount-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWSplitByAccount-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).fill('2026');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWSplitByAccount-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWSplitByAccount-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWSplitByAccount-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWSplitByAccount-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWSplitByAccount-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Period Required' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWSplitByAccount-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Period Required' }).fill('002');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWSplitByAccount-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Period Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWSplitByAccount-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  await page.waitForTimeout(15000);
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('split by accounts');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Split by Accounts Tile' }).click();
});