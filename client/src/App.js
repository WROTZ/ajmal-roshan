
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoicePage from "./pages/InvoicePage";
import PackingListPage from "./pages/PackingListPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvoicePage />} />
        <Route path="/packing-list" element={<PackingListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
