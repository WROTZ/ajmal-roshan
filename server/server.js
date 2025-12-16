
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import invoiceRoutes from "./routes/invoiceRoutes.js";
import packingRoutes from "./routes/packingRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/invoices", invoiceRoutes);
app.use("/api/packing-list", packingRoutes);

app.get("/", (req, res) => {
  res.send("Potent Invoice Backend Running");
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT || 5000, () =>
    console.log("Server running")
  );
});
