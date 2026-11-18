import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill('T_DSI_MGR');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'DSI' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Create Account Groups KDH1' }).click();
  await page.locator('iframe[name="application-ZGUI-KDH1-iframe"]').contentFrame().getByRole('textbox', { name: 'Acct Group Required' }).fill('TEST2');
  await page.locator('iframe[name="application-ZGUI-KDH1-iframe"]').contentFrame().getByRole('textbox', { name: 'Acct Group', exact: true }).click();
  await page.locator('iframe[name="application-ZGUI-KDH1-iframe"]').contentFrame().getByRole('textbox', { name: 'Acct Group', exact: true }).fill('10000000.TOP');
  await page.locator('iframe[name="application-ZGUI-KDH1-iframe"]').contentFrame().getByRole('textbox', { name: 'Chart of Accounts' }).click();
  await page.locator('iframe[name="application-ZGUI-KDH1-iframe"]').contentFrame().getByRole('textbox', { name: 'Chart of Accounts' }).fill('1000');
  await page.locator('iframe[name="application-ZGUI-KDH1-iframe"]').contentFrame().getByRole('textbox', { name: 'Chart of Accounts' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-KDH1-iframe"]').contentFrame().getByRole('button', { name: 'Yes' }).click();
  await page.locator('iframe[name="application-ZGUI-KDH1-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();
// write code for clicking save button
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('KDH1');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Create Account Groups KDH1' }).click();
  await page.waitForTimeout(5000);
});