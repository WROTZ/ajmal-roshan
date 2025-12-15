
import PDFDocument from "pdfkit";

export const generatePackingListPDF = (pl, res) => {
  if (!pl) {
    return res.status(404).json({ error: "Packing list not found" });
  }

  try {
    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    doc.pipe(res);

    doc.fontSize(18).text("PACKING LIST", { align: "center" });
    doc.moveDown();

    doc.text(`Packing List No: ${pl.packingListNo || "-"}`);
    doc.text(`Date: ${pl.packingDate || "-"}`);
    doc.moveDown();

    if (Array.isArray(pl.items) && pl.items.length) {
      pl.items.forEach((i, idx) => {
        doc.text(`${idx + 1}. ${i.description || ""} - ${i.quantity ?? ""} ${i.unit || ""}`);
      });
    } else {
      doc.text("No items");
    }

    doc.moveDown();
    doc.text(`Total Packages: ${pl.totalPackages ?? "0"}`);
    doc.end();
  } catch (err) {
    console.error("PDF generation error (packing list):", err);
    try { res.status(500).json({ error: "Failed to generate PDF" }); } catch (e) { /* ignore */ }
  }
};
