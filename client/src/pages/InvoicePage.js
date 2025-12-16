
import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../api";
import { Button, TextField, Typography } from "@mui/material";

export default function InvoicePage() {
  const [customer, setCustomer] = useState("");
  const [invoiceId, setInvoiceId] = useState("");

  const createInvoice = async () => {
    const res = await axios.post(`${API_URL}/api/invoices`, { customer });
    setInvoiceId(res.data._id);
    alert("Invoice Created");
  };

  const downloadPDF = () => {
    window.open(`${API_URL}/api/invoices/${invoiceId}/pdf`, "_blank");
  };

  return (
    <div style={{ padding: 30 }}>
      <Typography variant="h4">Commercial Invoice</Typography>
      <TextField
        label="Customer Name"
        fullWidth
        margin="normal"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />
      <Button variant="contained" onClick={createInvoice}>
        Save Invoice
      </Button>
      {invoiceId && (
        <Button style={{ marginLeft: 10 }} variant="outlined" onClick={downloadPDF}>
          Download PDF
        </Button>
      )}
    </div>
  );
}
