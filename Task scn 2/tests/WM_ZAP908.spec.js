import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_WM_ACCTNT');//15
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'FX Payment Accounting Entries' }).click();
  await page.locator('iframe[name="application-ZGUI-zap908-iframe"]').contentFrame().getByRole('textbox', { name: 'Clearing Doc. Posting Date' }).click();
  await page.locator('iframe[name="application-ZGUI-zap908-iframe"]').contentFrame().getByRole('textbox', { name: 'Clearing Doc. Posting Date' }).fill('01.01.2025');
  await page.locator('iframe[name="application-ZGUI-zap908-iframe"]').contentFrame().getByRole('textbox', { name: 'to' }).click();
  await page.locator('iframe[name="application-ZGUI-zap908-iframe"]').contentFrame().getByRole('textbox', { name: 'to' }).fill('14.10.2025');
  await page.locator('iframe[name="application-ZGUI-zap908-iframe"]').contentFrame().getByRole('textbox', { name: 'to' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zap908-iframe"]').contentFrame().getByRole('textbox', { name: 'FX Adj. Posting Date Required' }).fill('14.10.2025');
  await page.locator('iframe[name="application-ZGUI-zap908-iframe"]').contentFrame().getByRole('textbox', { name: 'FX Adj. Document Date Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zap908-iframe"]').contentFrame().getByRole('textbox', { name: 'FX Adj. Document Date Required' }).fill('14.10.2025');
  await page.locator('iframe[name="application-ZGUI-zap908-iframe"]').contentFrame().getByRole('textbox', { name: 'FX Adj. Document Date Required' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zap908-iframe"]').contentFrame().locator('#ur-loading-box').click();
  // await page.pause();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('ZAP908');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'FX Payment Accounting Entries' }).click();
  await page.waitForTimeout(5000);
});