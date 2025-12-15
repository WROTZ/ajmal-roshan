
import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
  invoiceNumber: String,
  invoiceDate: String,
  customer: {
    companyName: String,
    address: String,
    country: String,
    contact: String,
    consignee: String
  },
  shipping: {
    portOfLoading: String,
    destination: String,
    incoterms: String
  },
  items: [
    {
      description: String,
      model: String,
      qty: Number,
      unitPrice: Number,
      total: Number
    }
  ],
  subtotal: Number,
  grandTotal: Number
});

export default mongoose.model("Invoice", InvoiceSchema);
