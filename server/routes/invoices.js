
import express from "express";
import Invoice from "../models/Invoice.js";
import { generateInvoicePDF } from "../utils/generateInvoicePDF.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const invoice = new Invoice(req.body);
  await invoice.save();
  res.json(invoice);
});

router.get("/:id/pdf", async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);
  generateInvoicePDF(invoice, res);
});

export default router;
