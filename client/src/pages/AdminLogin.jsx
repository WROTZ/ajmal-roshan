import { useState } from "react";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        alert("Admin login will be connected to backend next");
    };

    return (
        <div style={{ padding: "30px", maxWidth: "400px" }}>
        <h1>Admin Login</h1>

        <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <br />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: "100%", padding: "8px" }}
            />
            </div>

            <div style={{ marginBottom: "15px" }}>
            <label>Password</label>
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: "100%", padding: "8px" }}
            />
            </div>

            <button
            type="submit"
            style={{
                padding: "10px 20px",
                backgroundColor: "#003366",
                color: "white",
                border: "none",
                cursor: "pointer"
            }}
            >
            Login
            </button>
        </form>
        </div>
    );
}
