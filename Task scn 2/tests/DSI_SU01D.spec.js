import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME3);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD3);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'DSI' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Generic' }).click();
  await page.getByRole('link', { name: 'User Display SU01D Tile' }).click();
  await page.locator('iframe[name="application-ZGUI-SU01D-iframe"]').contentFrame().getByRole('textbox', { name: 'User' }).fill('PT11401');
  await page.locator('iframe[name="application-ZGUI-SU01D-iframe"]').contentFrame().getByRole('textbox', { name: 'User' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-SU01D-iframe"]').contentFrame().getByRole('button', { name: 'Display' }).dblclick();
  await page.waitForTimeout(5000);
  });