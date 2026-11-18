import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill('T_SA_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting - Review and' }).click();
  await page.getByRole('link', { name: 'Vendor Line Item Display' }).click();
  await page.locator('iframe[name="application-ZGUI-zfbl1n-iframe"]').contentFrame().getByRole('textbox', { name: 'Vendor Account' }).fill('12589001');
  await page.locator('iframe[name="application-ZGUI-zfbl1n-iframe"]').contentFrame().getByRole('textbox', { name: 'Vendor Account' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zfbl1n-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
  await page.locator('iframe[name="application-ZGUI-zfbl1n-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-ZGUI-zfbl1n-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zfbl1n-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.waitForTimeout(5000);
  //ait page.locator('iframe[name="application-ZGUI-zfbl1n-iframe"]').contentFrame().locator('[id="M0:46:::10:5_l"]').dblclick();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('ZFBL1N');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'ZFBL1N' }).click();
  await page.waitForTimeout(5000);
});