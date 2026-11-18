import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

/**
 * Generate a PDF report with screenshots
 * @param {string} testName - Name of the test (will be used as filename)
 * @param {string} credentialName - Name of the user/credential used
 * @param {string} credentialUsername - Username of the credential
 * @param {string} screenshotDir - Directory containing the screenshots
 * @param {number} screenshotCount - Total number of screenshots captured
 * @param {string} status - Test status (PASSED/FAILED)
 * @returns {Promise<void>}
 */
export async function generatePDFReport(testName, credentialName, credentialUsername, screenshotDir, screenshotCount, status = 'PASSED') {
    return new Promise((resolve, reject) => {
        try {
            // Create pdf_results directory if it doesn't exist
            const pdfResultsDir = 'C:\\Users\\1494346\\Desktop\\FST_Task Scenarios\\pdf_results';
            if (!fs.existsSync(pdfResultsDir)) {
                fs.mkdirSync(pdfResultsDir, { recursive: true });
            }
            
            const pdfPath = path.join(pdfResultsDir, `${testName}.pdf`);
            
            const doc = new PDFDocument();
            const stream = fs.createWriteStream(pdfPath);
            
            doc.pipe(stream);
            
            // Header
            doc.fontSize(20).text(`Test Report: ${testName}`, { align: 'center' });
            doc.moveDown();
            
            // Test Details
            doc.fontSize(12);
            doc.text(`Test Name: ${testName} - ${credentialName} (${credentialUsername})`, { align: 'left' });
            doc.text(`Status: ${status}`, { align: 'left', color: status === 'PASSED' ? '008000' : 'FF0000' });
            doc.text(`Timestamp: ${new Date().toLocaleString()}`, { align: 'left' });
            doc.moveDown();
            
            // Screenshots Section
            doc.fontSize(14).text('Screenshots:', { align: 'left' });
            doc.moveDown();
            
            // Add all screenshots to the PDF
            for (let i = 1; i < screenshotCount; i++) {
                const screenshotPath = path.join(screenshotDir, `screenshot_${i}.png`);
                if (fs.existsSync(screenshotPath)) {
                    doc.addPage();
                    try {
                        doc.image(screenshotPath, 50, 50, { width: 500 });
                        doc.fontSize(10).text(`Screenshot ${i}`, { align: 'center' });
                    } catch (imgErr) {
                        doc.fontSize(10).text(`Error loading screenshot ${i}: ${imgErr.message}`, { align: 'center' });
                    }
                }
            }
            
            doc.end();
            
            stream.on('finish', resolve);
            stream.on('error', reject);
        } catch (err) {
            reject(err);
        }
    });
}
