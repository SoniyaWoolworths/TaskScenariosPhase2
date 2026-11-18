import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME15);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD15);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Display Overhead Allocation' }).click();
  await page.locator('iframe[name="application-OverheadCycle-displayOverheadAllocationCycleCostCenters-iframe"]').contentFrame().getByRole('textbox', { name: 'Cycle Required' }).click();
  await page.locator('iframe[name="application-OverheadCycle-displayOverheadAllocationCycleCostCenters-iframe"]').contentFrame().getByRole('textbox', { name: 'Cycle Required' }).fill('6406');
  await page.locator('iframe[name="application-OverheadCycle-displayOverheadAllocationCycleCostCenters-iframe"]').contentFrame().getByRole('textbox', { name: 'Cycle Required' }).press('Enter');
  await page.waitForTimeout(5000);
});