import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_PA_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('listitem', { name: 'Budgeting Projects & Assets' }).click();
  await page.getByRole('link', { name: 'Edit Budget Supplement' }).click();
  await page.locator('iframe[name="application-Project-changeBudgetSupplementInProject-iframe"]').contentFrame().getByRole('textbox', { name: 'Project def.' }).click();
  await page.locator('iframe[name="application-Project-changeBudgetSupplementInProject-iframe"]').contentFrame().getByRole('textbox', { name: 'Project def.' }).fill('H.1016');
  // await page.pause();
  await page.locator('iframe[name="application-Project-changeBudgetSupplementInProject-iframe"]').contentFrame().getByRole('option', { name: 'Project definition H.1016 Project Definition Name Name of resp.person History' }).click();
  await page.locator('iframe[name="application-Project-changeBudgetSupplementInProject-iframe"]').contentFrame().getByRole('textbox', { name: 'WBS Element' }).click();
  await page.locator('iframe[name="application-Project-changeBudgetSupplementInProject-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-Project-changeBudgetSupplementInProject-iframe"]').contentFrame().getByRole('button', { name: 'Go  Emphasized' }).click();
  await page.locator('iframe[name="application-Project-changeBudgetSupplementInProject-iframe"]').contentFrame().getByRole('gridcell', { name: 'Aberglassyln' }).locator('div').click();
  // await page.pause();
});