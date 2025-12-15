
import express from "express";
import PackingList from "../models/PackingList.js";
import { generatePackingListPDF } from "../utils/generatePackingListPDF.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const pl = new PackingList(req.body);
    await pl.save();
    res.json(pl);
  } catch (err) {
    console.error("Error saving packing list:", err);
    res.status(500).json({ error: err.message || "Failed to save packing list" });
  }
});

router.get("/:id/pdf", async (req, res) => {
  try {
    const pl = await PackingList.findById(req.params.id);
    if (!pl) {
      return res.status(404).json({ error: "Packing list not found" });
    }
    generatePackingListPDF(pl, res);
  } catch (err) {
    console.error("Error generating packing list PDF:", err);
    res.status(500).json({ error: err.message || "Failed to generate PDF" });
  }
});

export default router;
