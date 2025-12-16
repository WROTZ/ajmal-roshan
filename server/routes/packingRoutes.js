
import express from "express";
import Packing from "../models/Packing.js";
import { generatePDF } from "../utils/pdf.js";
import fs from "fs";

const router = express.Router();

router.post("/", async (req, res) => {
  const packing = await Packing.create(req.body);
  res.json(packing);
});

router.get("/:id", async (req, res) => {
  try {
    const packing = await Packing.findById(req.params.id);
    if (!packing) {
      return res.status(404).json({ error: "Packing list not found" });
    }
    res.json(packing);
  } catch (err) {
    console.error("Error fetching packing list:", err);
    res.status(500).json({ error: err.message || "Failed to fetch packing list" });
  }
});

router.get("/:id/pdf", async (req, res) => {
  const packing = await Packing.findById(req.params.id);
  let html = fs.readFileSync("./templates/packing.html", "utf8");

  html = html.replace("{{reference}}", packing.reference);

  const pdf = await generatePDF(html);

  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename=packing-list.pdf"
  });

  res.send(pdf);
});

router.put("/:id", async (req, res) => {
  try {
    const packing = await Packing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!packing) {
      return res.status(404).json({ error: "Packing list not found" });
    }
    res.json(packing);
  } catch (err) {
    console.error("Error updating packing list:", err);
    res.status(500).json({ error: err.message || "Failed to update packing list" });
  }
});

export default router;
