import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Display Billing Documents Tile' }).click();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('textbox', { name: 'Billing Document' }).click();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('textbox', { name: 'Billing Document' }).fill('9040487437');
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('textbox', { name: 'Billing Document' }).press('Enter');
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().locator('[id="M0:46:1-mrss-cont-left-content"]').getByText('1').click();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().locator('[id="M0:46:1-mrss-cont-left-content"]').getByText('1').dblclick();
  await page.locator('iframe[name="application-BillingDocument-displayBillingDocument-iframe"]').contentFrame().getByRole('button', { name: 'Document Flow Item' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('vf03');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Display Billing Documents Tile' }).click();
  await page.waitForTimeout(5000);
});