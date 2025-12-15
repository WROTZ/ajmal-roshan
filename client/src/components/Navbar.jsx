import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const location = useLocation();
    

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/admin");
    };

    // Render a specialized navbar for create invoice
    if (location.pathname === "/admin/invoice") {
        return (
            <nav className="bg-marine text-white px-6 py-3 flex items-center justify-between no-print">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="text-white/90">← Back</button>
                    <h2 className="font-semibold">Invoice Builder</h2>
                </div>
                <div className="flex items-center gap-3">
                    <button className="btn-primary" onClick={() => window.print()}>Print</button>
                    <button className="ml-2 bg-white/10 px-3 py-1 rounded">Save</button>
                </div>
            </nav>
        );
    }

    // Render a specialized navbar for create packing list
    if (location.pathname === "/admin/packing-list") {
        return (
            <nav className="bg-marine text-white px-6 py-3 flex items-center justify-between no-print">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="text-white/90">← Back</button>
                    <h2 className="font-semibold">Packing List</h2>
                </div>
                <div className="flex items-center gap-3">
                    <button className="btn-primary">Add Item</button>
                    <button className="ml-2 bg-white/10 px-3 py-1 rounded" onClick={() => window.print()}>Print</button>
                </div>
            </nav>
        );
    }

    return (
        <nav className="bg-marine text-white px-6 py-4 flex items-center justify-between no-print relative">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M2 17c0 0 3-4 10-4s10 4 10 4v2H2v-2z" fill="white" opacity="0.95" />
                    <path d="M4 11c4-3 8-3 12 0" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
                    <rect x="9" y="4" width="6" height="4" rx="0.5" fill="white" opacity="0.95" />
                </svg>
            </div>
            <h1 className="font-bold text-lg site-title">Potent Marine Services</h1>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
            <Link to="/" className="nav-link text-white">Home</Link>
            <Link to="/about" className="nav-link text-white">About</Link>
            <Link to="/services" className="nav-link text-white">Services</Link>

            {token && (
            <>
                <Link to="/admin/invoice" className="nav-link text-white">Invoice</Link>
                <Link to="/admin/packing-list" className="nav-link text-white">Packing List</Link>
                <button
                onClick={logout}
                className="ml-4 bg-red-600 px-3 py-1 rounded text-white font-semibold"
                >
                Logout
                </button>
            </>
            )}

            {!token && <Link to="/admin" className="ml-4 btn-primary text-white">Admin</Link>}
        </div>
        </nav>
    );
}
