import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "admin";

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const token = jwt.sign(
        { role: "admin" },
        process.env.JWT_SECRET || "secret123",
        { expiresIn: "1d" }
        );

        return res.json({ token });
    }

    return res.status(401).json({ message: "Invalid credentials" });
});

export default router;
