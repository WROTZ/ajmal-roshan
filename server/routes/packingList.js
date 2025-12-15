
import express from "express";
import PackingList from "../models/PackingList.js";
import { generatePackingListPDF } from "../utils/generatePackingListPDF.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const pl = new PackingList(req.body);
  await pl.save();
  res.json(pl);
});

router.get("/:id/pdf", async (req, res) => {
  const pl = await PackingList.findById(req.params.id);
  generatePackingListPDF(pl, res);
});

export default router;
