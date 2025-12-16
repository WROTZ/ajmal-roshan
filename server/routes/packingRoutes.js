
import express from "express";
import Packing from "../models/Packing.js";
import { generatePDF } from "../utils/pdf.js";
import fs from "fs";

const router = express.Router();

router.post("/", async (req, res) => {
  const packing = await Packing.create(req.body);
  res.json(packing);
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

export default router;
