import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Config' }).click();
  await page.getByRole('link', { name: 'Period Close for Project' }).click();
  await page.locator('iframe[name="application-Project-periodClose-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-Project-periodClose-iframe"]').contentFrame().getByRole('gridcell', { name: 'AD HOC', exact: true }).getByRole('textbox').click();
  await page.locator('iframe[name="application-Project-periodClose-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
  await page.locator('iframe[name="application-Project-periodClose-iframe"]').contentFrame().getByRole('button', { name: 'Display' }).click();
  await page.locator('iframe[name="application-Project-periodClose-iframe"]').contentFrame().locator('#C122-mrss-cont-none-Row-5').getByText('1000').click();
  await page.locator('iframe[name="application-Project-periodClose-iframe"]').contentFrame().getByRole('button', { name: 'Values' }).click();
  await page.locator('iframe[name="application-Project-periodClose-iframe"]').contentFrame().getByRole('button', { name: 'Variant Attributes' }).click();
  await page.locator('iframe[name="application-Project-periodClose-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('period');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Period Close for Project' }).click();
  await page.waitForTimeout(5000);
});