import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_DSI_MGR');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'DSI' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'EC-PCA: ALE send profit' }).click();
  await page.locator('iframe[name="application-ZGUI-ke77-iframe"]').contentFrame().getByRole('textbox', { name: 'Controlling area Required' }).fill('1000');
  await page.locator('iframe[name="application-ZGUI-ke77-iframe"]').contentFrame().getByRole('textbox', { name: 'Controlling area Required' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-ke77-iframe"]').contentFrame().getByRole('textbox', { name: 'Profit center Required' }).fill('3568');
  await page.locator('iframe[name="application-ZGUI-ke77-iframe"]').contentFrame().getByRole('textbox', { name: 'Profit center Required' }).press('Enter');
 //await page.pause();
 await page.locator('iframe[name="application-ZGUI-ke77-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
    await page.locator('iframe[name="application-ZGUI-ke77-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
    await page.locator('iframe[name="application-ZGUI-ke77-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
});