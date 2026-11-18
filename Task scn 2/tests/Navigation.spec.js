// const { test, expect } = require('@playwright/test');
// // const { readExcel, writeExcel, writeExcelFile } = require('../utility/excel');
// const PDFGenerator = require('../utility/pdfGenerator');
// const path = require('path');
// const fs = require('fs');

// let data = readExcel('C:\\Users\\1494346\\Desktop\\FST_Navigation\\test_data\\RTL_New.xlsx');
// const filePath = 'C:\\Users\\1494346\\Desktop\\FST_Navigation\\test_data\\RTL_New.xlsx';
// const sheetName = 'Sheet1';
// const screenshotBaseDir = path.join(__dirname, '..', 'screenshots');

// // Get test file name without extension
// const testFileName = path.parse(__filename).name;

// // Helper function to generate timestamp
// function getTimestamp() {
//   const now = new Date();
//   return now.toISOString().replace(/[:.]/g, '-').slice(0, -5); // Format: YYYY-MM-DDTHH-mm-ss
// }

// // Helper function to capture screenshot
// async function captureScreenshot(page, testCaseNumber, stepName) {
//   try {
//     const testcaseDir = path.join(screenshotBaseDir, `EEI_Testcase-${testCaseNumber}`);
    
//     // Create directory if it doesn't exist
//     if (!fs.existsSync(testcaseDir)) {
//       fs.mkdirSync(testcaseDir, { recursive: true });
//     }
    
//     const timestamp = getTimestamp();
//     const screenshotName = `${stepName}-${timestamp}.png`;
//     const screenshotPath = path.join(testcaseDir, screenshotName);
    
//     await page.screenshot({ path: screenshotPath });
//     console.log(`Screenshot saved: ${screenshotPath}`);
//   } catch (error) {
//     console.log(`Failed to capture screenshot: ${error.message}`);
//   }
// }

// data.forEach(({ SERIALNO, USERNAME, PASSWORD, SPACE, PAGE, SECTION, APPID, APPDESC, USERROLE }, index) => {
//   test(`Fioritest ${SERIALNO} - ${APPDESC}`, async ({ page }, testInfo) => {

//     // // US4 : 
//     await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

//     // // TS4 :
//     // await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');

//     // Login
//     await page.getByRole('textbox', { name: 'User' }).fill(USERNAME);
//     const passwordField = page.getByRole('textbox', { name: 'Password' });
//     await expect(passwordField).toBeVisible();
//     await expect(passwordField).toBeEnabled();
//     await passwordField.fill(PASSWORD);
//     const logOnButton = page.getByRole('button', { name: 'Log On' });
//     await expect(logOnButton).toBeVisible();
//     await expect(logOnButton).toBeEnabled();
//     await logOnButton.click();
//     await page.waitForTimeout(1500);
//     await captureScreenshot(page, SERIALNO, '01-LoggedIn');
//     // 3. Check for SPACE button
//     await page.waitForTimeout(1000);
//     // await expect(page.locator('span[dir="auto"].sapMITHTextContent').filter({ hasText: SPACE })).toBeVisible();
//     // await page.waitForTimeout(500);
    
//     const moreButton = page.getByRole('button', { name: 'More' });
//     await expect(moreButton).toBeVisible();
//     await expect(moreButton).toBeEnabled();
//     await moreButton.click({ force: true });
//     await page.waitForTimeout(1000);
//     await captureScreenshot(page, SERIALNO, '02-MoreButtonClicked');

//     // Navigate to the required page
//     if (PAGE) {
//       try {
//         //await page.getByRole('listitem', { name: PAGE }).click();
//         const pageMenuItem = page.locator('[role="menuitem"]').filter({ hasText: PAGE });
//         await expect(pageMenuItem).toBeVisible();
//         await expect(pageMenuItem).toBeEnabled();
//         await pageMenuItem.click({ force: true });
//         await page.waitForTimeout(3000);
//         await captureScreenshot(page, SERIALNO, '03-PageOpened');
//         //const pageselection = page.locator("li").filter({ hasText: PAGE });
//         console.log(" Page is opened");
//       } catch (error) {
//         console.log("Page is not opened", error);
//         return;
//       }
//     }
    
//     await page.waitForTimeout(1000);

//     // 6. Click on search button and enter APPID
//     if (SECTION) {
//       const sectionHeader = page.locator('h3').filter({ hasText: SECTION, exact: true });
//       const appdescLink = sectionHeader.locator('..').getByRole('link', { name: APPDESC });
      
//       await expect(appdescLink).toBeVisible();
//       await expect(appdescLink).toBeEnabled();
//       await appdescLink.click({ force: true });
//       await page.waitForTimeout(6000);
//       await captureScreenshot(page, SERIALNO, '04-AppDescClicked');
//       console.log("APPDESC clicked inside the section");

//       await page.waitForTimeout(3000);
//       await page.goto('https://sapts4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled&sap-client=300#Shell-home');
//       await page.waitForTimeout(1000);
//       await captureScreenshot(page, SERIALNO, '05-HomePageLoaded');

//       }

//       if(APPDESC){
//       await page.getByRole('button', { name: 'Open Search' }).click();
//       await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill(APPDESC);
//       await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
//       await page.waitForTimeout(500);
//       await captureScreenshot(page, SERIALNO, '06-AppDescSearched');
//       console.log("APPDESC searched globally");
//     }
//     else{
//       console.log("APPDESC doesn't exist in global search");
//     }
//     if (await page.getByText("Results (1)").isVisible()) {
//       // If result is 1, validate it matches APPDESC and click it
//       await page.waitForTimeout(2000);
//       const appDescResult = page.getByRole('link', { name: APPDESC });
//       await expect(appDescResult).toBeVisible();
//       await expect(appDescResult).toBeEnabled();
//       await page.waitForTimeout(2000);
//       await appDescResult.click({ force: true });
//       await page.waitForTimeout(500);
//       await captureScreenshot(page, SERIALNO, '07-OneResultFound');
//       console.log("One result found-APPDESCRIPTION");
//     }
//    else if (await page.getByText("Results (0)").isVisible()) {
//       // If result is 0, log not present
//       console.log("No result found-APPDESCRIPTION");
//       await page.getByRole('button', { name: 'Back' }).click();
//       await page.getByRole('button', { name: 'Open Search' }).click();
//       await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill(APPDESC.substring(0,3));
//       await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
//       await page.waitForTimeout(500);
//       await captureScreenshot(page, SERIALNO, '08-NoResultsPartialSearch');
//       console.log("APPDESC search with partial text");
//     } else {
//       // Multiple results or unknown state
//       console.log("Multiple results found-APPDESCRIPTION");
//       await page.getByRole('button', { name: 'Back' }).click();
//       await page.getByRole('button', { name: 'Open Search' }).click();
//       await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill(APPDESC.substring(0,3));
//       await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
//       await page.waitForTimeout(500);
//       await captureScreenshot(page, SERIALNO, '09-MultipleResultsPartialSearch');
//       console.log("APPDESC search with partial text");
//     }

//     });
// });

// test.afterEach(async ({ }, testInfo) => {
//   try {
//     const match = testInfo.title.match(/Fioritest\s+(\d+)/);
//     if (!match) {
//       console.warn('SERIALNO not found in test title:', testInfo.title);
//       return;
//     }

//     const serialNo = Number(match[1]);
//     const excelRow = serialNo + 1;
//     const status = testInfo.status === 'passed' ? 'PASS' : 'FAIL';
//     let failureReason = '';

//     // Capture error details
//     if (testInfo.status === 'failed' || testInfo.status === 'timedOut') {
//       if (testInfo.error?.message) {
//         failureReason = testInfo.error.message;
//       } else if (testInfo.status === 'timedOut') {
//         failureReason = 'Test timed out';
//       } else {
//         failureReason = 'Test failed';
//       }
//     }

//     // Write to Excel with delay to ensure file is accessible
//     await new Promise(resolve => setTimeout(resolve, 200));

//     try {
//       // Write status to column J and failure reason to column K
//       console.log(`Writing to Excel: Row ${excelRow}, SheetName: ${sheetName}, Status: ${status}, Reason: ${failureReason || 'None'}`);
//       writeExcelFile(filePath, sheetName, excelRow, 'J', status);
//       writeExcelFile(filePath, sheetName, excelRow, 'K', failureReason || '');
//       console.log(`Updated Excel Row ${excelRow}: ${status} - ${failureReason || 'No errors'}`);
//     } catch (excelError) {
//       console.error(`Failed to update Excel: ${excelError.message}`);
//     }

//     // Generate PDF report with screenshots for this test case
//     const screenshotBaseDir = path.join(__dirname, '..', 'screenshots');
//     const testFileName = path.parse(__filename).name;
//     const pdfGenerator = new PDFGenerator({
//       testCaseNumber: serialNo,
//       testFileName: testFileName,
//       screenshotDir: screenshotBaseDir,
//       outputDir: path.join(__dirname, '..', 'pdf_result'),
//       testStatus: status,
//       testError: testInfo.error?.message || ''
//     });

//     // Collect screenshots from the test case directory
//     pdfGenerator.collectScreenshotsFromTestCase();

//     // Generate PDF
//     if (pdfGenerator.screenshots.length > 0) {
//       const pdfPath = await pdfGenerator.generatePDF();
//       console.log(`PDF generated successfully: ${pdfPath}`);
//     } else {
//       console.log(`No screenshots found for test case ${serialNo}`);
//     }
//   } catch (error) {
//     console.error(`Error in afterEach: ${error.message}`);
//   }
// });