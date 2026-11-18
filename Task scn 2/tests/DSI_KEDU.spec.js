import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_DSI_MGR');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'DSI' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'CO-PA: Build Summarization' }).click();
  await page.locator('iframe[name="application-ZGUI-KEDU-iframe"]').contentFrame().getByRole('textbox', { name: 'Operating concern Required' }).fill('1000');
  await page.locator('iframe[name="application-ZGUI-KEDU-iframe"]').contentFrame().getByRole('textbox', { name: 'Operating concern Required' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-KEDU-iframe"]').contentFrame().getByRole('textbox', { name: 'Type of Profitability' }).fill('1');
  await page.locator('iframe[name="application-ZGUI-KEDU-iframe"]').contentFrame().getByRole('textbox', { name: 'Type of Profitability' }).press('Enter');
    await page.locator('iframe[name="application-ZGUI-KEDU-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
});