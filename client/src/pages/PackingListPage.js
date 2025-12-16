
import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../api";
import { Button, TextField, Typography } from "@mui/material";

export default function PackingListPage() {
  const [ref, setRef] = useState("");
  const [packingId, setPackingId] = useState("");
  const [editId, setEditId] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const createPacking = async () => {
    const res = await axios.post(`${API_URL}/api/packing-list`, { reference: ref });
    setPackingId(res.data._id);
    alert("Packing List Created");
  };

  const loadPacking = async () => {
    if (!editId) return;
    const res = await axios.get(`${API_URL}/api/packing-list/${editId}`);
    setRef(res.data.reference);
    setPackingId(editId);
    setIsEditing(true);
  };

  const updatePacking = async () => {
    const res = await axios.put(`${API_URL}/api/packing-list/${packingId}`, { reference: ref });
    alert("Packing List Updated");
  };

  const downloadPDF = () => {
    window.open(`${API_URL}/api/packing-list/${packingId}/pdf`, "_blank");
  };

  return (
    <div style={{ padding: 30 }}>
      <Typography variant="h4">Packing List</Typography>
      <TextField
        label="Packing List ID to Edit (optional)"
        fullWidth
        margin="normal"
        value={editId}
        onChange={(e) => setEditId(e.target.value)}
      />
      <Button variant="outlined" onClick={loadPacking} style={{ marginRight: 10 }}>
        Load Packing List
      </Button>
      <TextField
        label="Invoice Reference"
        fullWidth
        margin="normal"
        value={ref}
        onChange={(e) => setRef(e.target.value)}
      />
      <Button variant="contained" onClick={isEditing ? updatePacking : createPacking}>
        {isEditing ? "Update Packing List" : "Save Packing List"}
      </Button>
      {packingId && (
        <Button style={{ marginLeft: 10 }} variant="outlined" onClick={downloadPDF}>
          Download PDF
        </Button>
      )}
    </div>
  );
}
