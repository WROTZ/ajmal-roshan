import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import AdminLogin from "./pages/AdminLogin";
import CreateInvoice from "./pages/CreateInvoice";
import CreatePackingList from "./pages/CreatePackingList";

export default function App() {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/admin" element={<AdminLogin />} />

            <Route
            path="/admin/invoice"
            element={
                <ProtectedRoute>
                <CreateInvoice />
                </ProtectedRoute>
            }
            />

            <Route
            path="/admin/packing-list"
            element={
                <ProtectedRoute>
                <CreatePackingList />
                </ProtectedRoute>
            }
            />
        </Routes>
        </BrowserRouter>
    );
}
