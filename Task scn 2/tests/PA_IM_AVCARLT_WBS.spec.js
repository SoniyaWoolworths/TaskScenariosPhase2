import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Budget Depletion for WBS' }).click();
  await page.locator('iframe[name="application-ZGUI-IM_AVCALRT_WBS-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
   await page.getByRole('button', { name: 'Open Search' }).click();
  //await page.getByRole('button', { name: 'Execute (F8)' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('budget depletion for WBS elements');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Budget Depletion for WBS' }).click();
  await page.waitForTimeout(5000);
});