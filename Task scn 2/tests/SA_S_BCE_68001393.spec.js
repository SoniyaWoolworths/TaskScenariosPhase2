import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Generic' }).click();
  await page.getByRole('link', { name: 'Users by address data' }).click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('button', { name: 'Display Details' }).click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Logon Data' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'SNC' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Defaults' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Parameters' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Roles' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Profiles' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Groups' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Personalization' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Lic. Data' }).locator('span').click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('S_BCE_68001393');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Users by address data' }).click();
  await page.waitForTimeout(5000);
});