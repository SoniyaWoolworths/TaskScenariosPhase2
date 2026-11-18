import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME15);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD15);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Reporting - Financial' }).click();
  await page.getByRole('link', { name: 'WHS OPS Summary (New) Tile' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).fill('2025');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Period Required' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Period Required' }).fill('10');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Period Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category' }).fill('0');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPELRWHSOPSSummary-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  await page.waitForTimeout(10000);
});