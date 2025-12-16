import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        const res = await fetch(
        "https://ajmal-roshan-1.onrender.com/api/auth/login",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        }
        );

        if (!res.ok) {
        alert("Invalid login");
        return;
        }

        const data = await res.json();
        localStorage.setItem("token", data.token);
        navigate("/admin/invoice");
    };

    return (
        <form onSubmit={login}>
        <h2>Admin Login</h2>

        <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />

        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        </form>
    );
}
