
import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../api";
import { Button, TextField, Typography } from "@mui/material";

export default function InvoicePage() {
  const [customer, setCustomer] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [editId, setEditId] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const createInvoice = async () => {
    const res = await axios.post(`${API_URL}/api/invoices`, { customer });
    setInvoiceId(res.data._id);
    alert("Invoice Created");
  };

  const loadInvoice = async () => {
    if (!editId) return;
    const res = await axios.get(`${API_URL}/api/invoices/${editId}`);
    setCustomer(res.data.customer);
    setInvoiceId(editId);
    setIsEditing(true);
  };

  const updateInvoice = async () => {
    const res = await axios.put(`${API_URL}/api/invoices/${invoiceId}`, { customer });
    alert("Invoice Updated");
  };

  const downloadPDF = () => {
    window.open(`${API_URL}/api/invoices/${invoiceId}/pdf`, "_blank");
  };

  return (
    <div style={{ padding: 30 }}>
      <Typography variant="h4">Commercial Invoice</Typography>
      <TextField
        label="Invoice ID to Edit (optional)"
        fullWidth
        margin="normal"
        value={editId}
        onChange={(e) => setEditId(e.target.value)}
      />
      <Button variant="outlined" onClick={loadInvoice} style={{ marginRight: 10 }}>
        Load Invoice
      </Button>
      <TextField
        label="Customer Name"
        fullWidth
        margin="normal"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />
      <Button variant="contained" onClick={isEditing ? updateInvoice : createInvoice}>
        {isEditing ? "Update Invoice" : "Save Invoice"}
      </Button>
      {invoiceId && (
        <Button style={{ marginLeft: 10 }} variant="outlined" onClick={downloadPDF}>
          Download PDF
        </Button>
      )}
    </div>
  );
}
