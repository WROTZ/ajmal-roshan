
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

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch(err => console.log(err));
