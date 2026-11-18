import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Maintain Contract Condition' }).click();
  await page.locator('iframe[name="application-ConditionContract-maintainAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Other Condition Contract' }).click();
  await page.locator('iframe[name="application-ConditionContract-maintainAdvanced-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ConditionContract-maintainAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Go  Emphasized' }).click();
  await page.locator('iframe[name="application-ConditionContract-maintainAdvanced-iframe"]').contentFrame().getByText('1024901008').click();
  // await page.pause();
  await page.locator('iframe[name="application-ConditionContract-maintainAdvanced-iframe"]').contentFrame().getByText('1024901008').press('Enter');
    await page.locator('iframe[name="application-ConditionContract-maintainAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'OK' }).click();
  await page.locator('iframe[name="application-ConditionContract-maintainAdvanced-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(5000);
});