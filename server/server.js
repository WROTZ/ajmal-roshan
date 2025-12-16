import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import invoiceRoutes from "./routes/invoiceRoutes.js";
import packingRoutes from "./routes/packingRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "*", // later you can restrict to Vercel domain
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

// Routes
app.use("/api/invoices", invoiceRoutes);
app.use("/api/packing-list", packingRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Potent Invoice Backend Running");
});

// Start server safely
const PORT = process.env.PORT || 5000;

if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI not defined");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

