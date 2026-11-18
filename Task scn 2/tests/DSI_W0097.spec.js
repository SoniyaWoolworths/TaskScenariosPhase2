import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME3);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD3);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'DSI' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting - Financial' }).click();
  await page.getByRole('link', { name: 'Trial Balance Tile' }).click();
  //await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled&sap-client=300&sap-language=EN#GLAccount-analyzeTrialBalance?sap-ui-tech-hint=WDA&/sap-iapp-state=ASFW4A1HKKZEQ8ID0IK75UJJNRJKE3NJNUOA7YEJ');
  await page.getByRole('button', { name: 'Profile of DSI System' }).click();
  await page.getByText('About').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('iframe[name="application-GLAccount-analyzeTrialBalance-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
  await page.locator('iframe[name="application-GLAccount-analyzeTrialBalance-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
  await page.locator('iframe[name="application-GLAccount-analyzeTrialBalance-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
  await page.locator('iframe[name="application-GLAccount-analyzeTrialBalance-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  await page.waitForTimeout(50000);
});