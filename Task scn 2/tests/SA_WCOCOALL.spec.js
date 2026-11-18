import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Display Contracts Condition' }).click();
   await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('dialog', { name: 'Find Variant' }).getByLabel('Created By').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('dialog', { name: 'Find Variant' }).getByLabel('Created By').press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('dialog', { name: 'Find Variant' }).getByLabel('Created By').fill('');
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Execute (F8)' }).click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByText('/TPCDEALID').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  //await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  //locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M0:46:::4:1_l"]')
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().locator('[id="M0:46:::4:1_l"]').dblclick();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('tab', { name: 'Sales' }).locator('span').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('tab', { name: 'Purchasing' }).locator('span').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('tab', { name: 'Responsibility Area' }).locator('span').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('tab', { name: 'Administration' }).locator('span').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('tab', { name: 'Header Texts' }).locator('span').click();
  await page.locator('iframe[name="application-ConditionContract-displayContractsAdvanced-iframe"]').contentFrame().getByRole('tab', { name: 'Status' }).locator('span').click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('WCOCOALL');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display Contracts Condition' }).click();
  await page.waitForTimeout(5000);
});