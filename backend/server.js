const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Quick-Kart backend is running 🚀",
  });
});

app.listen(PORT, () => {
  console.log(`Quick-Kart backend running on http://localhost:${PORT}`);
});