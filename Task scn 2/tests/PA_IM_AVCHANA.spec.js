import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME7);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD7);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Monitor Avail.Ctr. for Inv.' }).click();
  await page.locator('iframe[name="application-ZGUI-IM_AVCHANA-iframe"]').contentFrame().getByRole('textbox', { name: 'Investment program Required' }).fill('EGL');
  await page.locator('iframe[name="application-ZGUI-IM_AVCHANA-iframe"]').contentFrame().getByRole('textbox', { name: 'Position ID' }).click();
  await page.locator('iframe[name="application-ZGUI-IM_AVCHANA-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year Required' }).click();
  await page.locator('iframe[name="application-ZGUI-IM_AVCHANA-iframe"]').contentFrame().getByRole('textbox', { name: 'Approval year Required' }).fill('2025');
  await page.locator('iframe[name="application-ZGUI-IM_AVCHANA-iframe"]').contentFrame().getByRole('textbox', { name: 'Report Currency Required' }).click();
  await page.locator('iframe[name="application-ZGUI-IM_AVCHANA-iframe"]').contentFrame().getByRole('textbox', { name: 'Report Currency Required' }).fill('AUD');
  await page.locator('iframe[name="application-ZGUI-IM_AVCHANA-iframe"]').contentFrame().getByRole('textbox', { name: 'Position ID' }).click();
  await page.locator('iframe[name="application-ZGUI-IM_AVCHANA-iframe"]').contentFrame().getByRole('textbox', { name: 'Position ID' }).fill('EGL_BWS_ALH');
  await page.locator('iframe[name="application-ZGUI-IM_AVCHANA-iframe"]').contentFrame().getByTitle('F8').click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('IM_AVCHANA');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Monitor Avail.Ctr. for Inv.' }).click();
  await page.waitForTimeout(5000);
});