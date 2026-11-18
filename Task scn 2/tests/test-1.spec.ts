import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('textbox', { name: 'Database prof. Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-zps140-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();


  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled&sap-client=300#Shell-home');



  await page.getByText('AP').click();
  await expect(page.getByRole('link', { name: 'Display Supplier Balances Tile' })).toBeVisible();
  await page.getByText('Projects').click();
  await expect(page.getByRole('link', { name: 'Project Budget Budget/Actual/' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Budget/Actual/Committed' })).toBeVisible();


  await page.getByText('Profitability Analysis').click();

  await expect(page.getByRole('link', { name: 'KE30 Execute profitability' })).toBeVisible();


  await expect(page.getByRole('heading', { name: 'Reporting - Review and Analysis' })).toBeVisible();

  await page.waitForTimeout(2000);
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled&sap-client=300&sap-language=EN#Shell-home');


  
  
  




});