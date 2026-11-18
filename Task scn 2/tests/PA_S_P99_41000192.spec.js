import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Projects & Assets' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Posted Depreciation by Asset' }).click();
  await page.locator('iframe[name="application-ZGUI-S_P99_41000192-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-S_P99_41000192-iframe"]').contentFrame().getByRole('gridcell', { name: 'Row selected. To deselect the' }).locator('div').click();
  await page.locator('iframe[name="application-ZGUI-S_P99_41000192-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-S_P99_41000192-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Number' }).click();
  await page.locator('iframe[name="application-ZGUI-S_P99_41000192-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Number' }).fill('10062167');
  await page.locator('iframe[name="application-ZGUI-S_P99_41000192-iframe"]').contentFrame().getByRole('textbox', { name: 'Asset Number' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-S_P99_41000192-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).dblclick();
  await page.waitForTimeout(5000);
});