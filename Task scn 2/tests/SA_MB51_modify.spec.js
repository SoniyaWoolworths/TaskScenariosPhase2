import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(process.env.USERNAME11);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD11);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Service Accounting' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Display Article Document List' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', exact: true }).fill('55254');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', exact: true }).press('Enter');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).fill('1118');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Site' }).press('Enter');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('button', { name: 'Save as Variant...' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Variant Name Required' }).fill('TEST1');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Description Required' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('textbox', { name: 'Description Required' }).fill('TEST1');
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('button', { name: 'Yes' }).click();
  await page.locator('iframe[name="application-MaterialMovement-displayMaterialDocumentListInWebGUI-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.waitForTimeout(5000);
});