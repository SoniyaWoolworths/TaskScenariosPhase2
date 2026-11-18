import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting - Financial' }).click();
  await page.getByRole('link', { name: 'Cost Centers Plan/Actual' }).click();
  await page.locator('iframe[name="application-CostCenter-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).click();
  await page.locator('iframe[name="application-CostCenter-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).fill('400');
  await page.locator('iframe[name="application-CostCenter-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).press('Enter');
  await page.locator('iframe[name="application-CostCenter-analyzePlanActualCDSQ-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  await page.waitForTimeout(30000);
});