
import express from "express";
import Invoice from "../models/Invoice.js";
import { generatePDF } from "../utils/pdf.js";
import fs from "fs";

const router = express.Router();

router.post("/", async (req, res) => {
  const invoice = await Invoice.create(req.body);
  res.json(invoice);
});

router.get("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }
    res.json(invoice);
  } catch (err) {
    console.error("Error fetching invoice:", err);
    res.status(500).json({ error: err.message || "Failed to fetch invoice" });
  }
});

router.get("/:id/pdf", async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);
  let html = fs.readFileSync("./templates/invoice.html", "utf8");

  html = html
    .replace("{{customer}}", invoice.customer)
    .replace("{{total}}", invoice.totalAmount || 0);

  const pdf = await generatePDF(html);

  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename=invoice.pdf"
  });

  res.send(pdf);
});

router.put("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }
    res.json(invoice);
  } catch (err) {
    console.error("Error updating invoice:", err);
    res.status(500).json({ error: err.message || "Failed to update invoice" });
  }
});

export default router;
