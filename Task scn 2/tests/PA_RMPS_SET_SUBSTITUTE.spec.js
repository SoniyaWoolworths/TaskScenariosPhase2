import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_PA_ACCTNT');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Projects & Assets' }).click();
  await page.getByRole('link', { name: 'Maintain Substitute (' }).click();
  await page.locator('iframe[name="application-ZGUI-RMPS_SET_SUBSTITUTE-iframe"]').contentFrame().getByRole('textbox', { name: 'User Name Required' }).click();
  await page.locator('iframe[name="application-ZGUI-RMPS_SET_SUBSTITUTE-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-RMPS_SET_SUBSTITUTE-iframe"]').contentFrame().getByRole('button', { name: 'Continue (Enter)' }).click();
   await page.locator('iframe[name="application-ZGUI-RMPS_SET_SUBSTITUTE-iframe"]').contentFrame().getByRole('textbox', { name: 'User Name Required' }).click();
  await page.locator('iframe[name="application-ZGUI-RMPS_SET_SUBSTITUTE-iframe"]').contentFrame().getByRole('textbox', { name: 'User Name Required' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-RMPS_SET_SUBSTITUTE-iframe"]').contentFrame().getByRole('textbox', { name: 'User Name Required' }).fill('');
  await page.locator('iframe[name="application-ZGUI-RMPS_SET_SUBSTITUTE-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-RMPS_SET_SUBSTITUTE-iframe"]').contentFrame().getByRole('button', { name: 'Go  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-RMPS_SET_SUBSTITUTE-iframe"]').contentFrame().locator('#SHresultgrid1-mrss-cont-left-Row-1').getByRole('gridcell', { name: 'To select a row, press the' }).locator('div').dblclick();  
  await page.locator('iframe[name="application-ZGUI-RMPS_SET_SUBSTITUTE-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-RMPS_SET_SUBSTITUTE-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.waitForTimeout(2000);    
});