
import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../api";
import { Button, TextField, Typography } from "@mui/material";

export default function PackingListPage() {
  const [ref, setRef] = useState("");
  const [packingId, setPackingId] = useState("");

  const createPacking = async () => {
    const res = await axios.post(`${API_URL}/api/packing-list`, { ref });
    setPackingId(res.data._id);
    alert("Packing List Created");
  };

  const downloadPDF = () => {
    window.open(`${API_URL}/api/packing-list/${packingId}/pdf`, "_blank");
  };

  return (
    <div style={{ padding: 30 }}>
      <Typography variant="h4">Packing List</Typography>
      <TextField
        label="Invoice Reference"
        fullWidth
        margin="normal"
        value={ref}
        onChange={(e) => setRef(e.target.value)}
      />
      <Button variant="contained" onClick={createPacking}>
        Save Packing List
      </Button>
      {packingId && (
        <Button style={{ marginLeft: 10 }} variant="outlined" onClick={downloadPDF}>
          Download PDF
        </Button>
      )}
    </div>
  );
}
