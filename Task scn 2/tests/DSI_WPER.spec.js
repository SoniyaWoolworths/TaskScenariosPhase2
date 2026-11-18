import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME3);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD3);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'DSI' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Monitor POS Communication Tile' }).click();
  await page.getByRole('button', { name: 'Profile of DSI System' }).click();
  await page.getByText('About').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('iframe[name="application-PointOfSaleCommunication-monitor-iframe"]').contentFrame().getByRole('textbox', { name: 'Logical message cat.' }).click();
  await page.locator('iframe[name="application-PointOfSaleCommunication-monitor-iframe"]').contentFrame().getByRole('textbox', { name: 'Logical message cat.' }).fill('WPUUMS');
  await page.locator('iframe[name="application-PointOfSaleCommunication-monitor-iframe"]').contentFrame().getByRole('textbox', { name: 'Logical message cat.' }).press('Enter');
  await page.locator('iframe[name="application-PointOfSaleCommunication-monitor-iframe"]').contentFrame().getByRole('button', { name: 'Execute Emphasized' }).click();
  await page.waitForTimeout(15000);
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('WPER');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Monitor POS Communication Tile' }).click();
});