import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_SA_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Edit Derivation Rules' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-maintainDerivationRules-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-maintainDerivationRules-iframe"]').contentFrame().getByRole('gridcell', { name: 'Row selected. To deselect the' }).locator('div').click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-maintainDerivationRules-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-maintainDerivationRules-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-maintainDerivationRules-iframe"]').contentFrame().getByRole('row', { name: 'To select a row, press the space bar. 16 Derivation rule Area / Region /' }).getByRole('gridcell').click();
  await page.locator('iframe[name="application-ProfitabilityAnalysis-maintainDerivationRules-iframe"]').contentFrame().getByRole('button', { name: 'Display Rule Values' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('edit derivation');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Edit Derivation Rules' }).click();
  await page.waitForTimeout(5000);
  });