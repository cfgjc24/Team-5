const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(cors());

let notifications = [];

app.post("/notifications", (req, res) => {
  console.log(req.body);
  const { status, comment } = req.body;

  if (!status) {
    return res.status(400).json({ error: "Status and comment are required." });
  }

  notifications.push({ status, comment });

  res.status(201).json({ message: "Notification received." });
});

app.get("/notifications", (_, res) => {
  res.json(notifications);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

