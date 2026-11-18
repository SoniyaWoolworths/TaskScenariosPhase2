import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Projects & Assets' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Budgeting' }).click();
  await page.getByRole('link', { name: 'Display Project Budget' }).click();
  await page.locator('iframe[name="application-Project-displayProjectBudgetRelease-iframe"]').contentFrame().getByRole('textbox', { name: 'Project def.' }).click();
  await page.locator('iframe[name="application-Project-displayProjectBudgetRelease-iframe"]').contentFrame().getByRole('textbox', { name: 'Project def.' }).fill('N1.3575');
  await page.locator('iframe[name="application-Project-displayProjectBudgetRelease-iframe"]').contentFrame().getByRole('textbox', { name: 'Project def.' }).press('Enter');
  await page.waitForTimeout(20000);
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('CJ33');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display Project Budget' }).click();
  await page.waitForTimeout(5000);
});