
import mongoose from "mongoose";

const PackingListSchema = new mongoose.Schema({
  invoiceId: { type: mongoose.Schema.Types.ObjectId, ref: "Invoice" },
  packingListNo: String,
  packingDate: String,
  shipper: { name: String, address: String, country: String },
  consignee: { name: String, address: String, country: String },
  shippingDetails: { portOfLoading: String, destination: String },
  items: [
    {
      description: String,
      model: String,
      quantity: Number,
      unit: String,
      netWeight: Number,
      grossWeight: Number,
      cbm: Number
    }
  ],
  totalPackages: Number,
  totalNetWeight: Number,
  totalGrossWeight: Number,
  totalCBM: Number
});

export default mongoose.model("PackingList", PackingListSchema);
