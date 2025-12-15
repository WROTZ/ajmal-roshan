
import PDFDocument from "pdfkit";

export const generateInvoicePDF = (invoice, res) => {
  const doc = new PDFDocument();
  res.setHeader("Content-Type", "application/pdf");
  doc.pipe(res);

  doc.fontSize(18).text("COMMERCIAL INVOICE", { align: "center" });
  doc.moveDown();

  doc.text("Potent Marine Services L.L.C-FZ");
  doc.text("Dubai, United Arab Emirates");
  doc.moveDown();

  doc.text(`Invoice No: ${invoice.invoiceNumber}`);
  doc.text(`Date: ${invoice.invoiceDate}`);
  doc.moveDown();

  invoice.items.forEach(i => {
    doc.text(`${i.description} - ${i.qty} x ${i.unitPrice} = ${i.total}`);
  });

  doc.moveDown();
  doc.text(`Grand Total: USD ${invoice.grandTotal}`);
  doc.end();
};
