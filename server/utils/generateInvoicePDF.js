
import PDFDocument from "pdfkit";

export const generateInvoicePDF = (invoice, res) => {
  if (!invoice) {
    return res.status(404).json({ error: "Invoice not found" });
  }

  try {
    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    doc.pipe(res);

    doc.fontSize(18).text("COMMERCIAL INVOICE", { align: "center" });
    doc.moveDown();

    doc.text("Potent Marine Services L.L.C-FZ");
    doc.text("Dubai, United Arab Emirates");
    doc.moveDown();

    doc.text(`Invoice No: ${invoice.invoiceNumber || "-"}`);
    doc.text(`Date: ${invoice.invoiceDate || "-"}`);
    doc.moveDown();

    if (Array.isArray(invoice.items) && invoice.items.length) {
      invoice.items.forEach(i => {
        doc.text(`${i.description || ""} - ${i.qty ?? ""} x ${i.unitPrice ?? ""} = ${i.total ?? ""}`);
      });
    } else {
      doc.text("No items");
    }

    doc.moveDown();
    doc.text(`Grand Total: USD ${invoice.grandTotal ?? "0"}`);
    doc.end();
  } catch (err) {
    console.error("PDF generation error (invoice):", err);
    try { res.status(500).json({ error: "Failed to generate PDF" }); } catch (e) { /* ignore */ }
  }
};
