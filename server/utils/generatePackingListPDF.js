
import PDFDocument from "pdfkit";

export const generatePackingListPDF = (pl, res) => {
  const doc = new PDFDocument();
  res.setHeader("Content-Type", "application/pdf");
  doc.pipe(res);

  doc.fontSize(18).text("PACKING LIST", { align: "center" });
  doc.moveDown();

  doc.text(`Packing List No: ${pl.packingListNo}`);
  doc.text(`Date: ${pl.packingDate}`);
  doc.moveDown();

  pl.items.forEach((i, idx) => {
    doc.text(`${idx+1}. ${i.description} - ${i.quantity} ${i.unit}`);
  });

  doc.moveDown();
  doc.text(`Total Packages: ${pl.totalPackages}`);
  doc.end();
};
