
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import invoiceRoutes from "./routes/invoices.js";
import packingListRoutes from "./routes/packingList.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/invoices", invoiceRoutes);
app.use("/api/packing-list", packingListRoutes);

const start = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("MONGO_URI is not set. Aborting server start.");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message || err);
    process.exit(1);
  }
};

start();
