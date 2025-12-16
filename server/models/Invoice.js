
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  description: String,
  qty: Number,
  price: Number,
  total: Number
});

const invoiceSchema = new mongoose.Schema({
  customer: String,
  items: [itemSchema],
  totalAmount: Number
}, { timestamps: true });

export default mongoose.model("Invoice", invoiceSchema);
