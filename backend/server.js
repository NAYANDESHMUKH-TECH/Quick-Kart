const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

app.get("/", (req, res) => {
  res.json({
    message: "Quick-Kart backend is running 🚀",
  });
});

app.get("/api/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 AS result");

    res.json({
      message: "MySQL connection successful 🚀",
      database: process.env.DB_NAME,
      result: rows[0].result,
    });
  } catch (error) {
    console.error("Database connection error:", error);

    res.status(500).json({
      message: "MySQL connection failed",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Quick-Kart backend running on http://localhost:${PORT}`);
});