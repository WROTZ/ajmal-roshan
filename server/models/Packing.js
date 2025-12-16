
import mongoose from "mongoose";

const packingSchema = new mongoose.Schema({
  reference: String,
  totalPackages: Number
}, { timestamps: true });

export default mongoose.model("Packing", packingSchema);
