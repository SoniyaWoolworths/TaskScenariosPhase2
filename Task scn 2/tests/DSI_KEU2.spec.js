import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_DSI_MGR');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Edit Overhead Allocation Cycles Profitability Analysis Tile' }).click();
  await page.locator('iframe[name="application-OverheadCycle-changeOverheadAllocationCycleProfitabilityAnalysis-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-OverheadCycle-changeOverheadAllocationCycleProfitabilityAnalysis-iframe"]').contentFrame().getByRole('gridcell', { name: 'Row selected. To deselect the' }).locator('div').click();
  await page.locator('iframe[name="application-OverheadCycle-changeOverheadAllocationCycleProfitabilityAnalysis-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-OverheadCycle-changeOverheadAllocationCycleProfitabilityAnalysis-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-OverheadCycle-changeOverheadAllocationCycleProfitabilityAnalysis-iframe"]').contentFrame().getByRole('textbox', { name: 'Cycle Required' }).fill('BIGW02');
  await page.locator('iframe[name="application-OverheadCycle-changeOverheadAllocationCycleProfitabilityAnalysis-iframe"]').contentFrame().getByRole('textbox', { name: 'Start Date' }).click();
    await page.locator('iframe[name="application-OverheadCycle-changeOverheadAllocationCycleProfitabilityAnalysis-iframe"]').contentFrame().getByRole('textbox', { name: 'Start Date' }).fill('01.01.2026');
    await page.locator('iframe[name="application-OverheadCycle-changeOverheadAllocationCycleProfitabilityAnalysis-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
});