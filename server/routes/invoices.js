
import express from "express";
import Invoice from "../models/Invoice.js";
import { generateInvoicePDF } from "../utils/generateInvoicePDF.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.json(invoice);
  } catch (err) {
    console.error("Error saving invoice:", err);
    res.status(500).json({ error: err.message || "Failed to save invoice" });
  }
});

router.get("/:id/pdf", async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }
    generateInvoicePDF(invoice, res);
  } catch (err) {
    console.error("Error generating invoice PDF:", err);
    res.status(500).json({ error: err.message || "Failed to generate PDF" });
  }
});

export default router;
