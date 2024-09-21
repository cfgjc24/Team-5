const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(cors());

let notifications = [];

app.post("/notifications", (req, res) => {
  const { status, comment } = req.body;

  if (!status) {
    return res.status(400).json({ error: "Status and comment are required." });
  }

  id = Date.now();

  notifications.push({ id, status, comment });

  res.status(201).json({ message: "Notification received." });
});

app.get("/notifications", (_, res) => {
  res.json(notifications);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.delete("/notifications/:id", (req, res) => {
  const { id } = req.params;
  const notificationId = Number(id);

  const index = notifications.findIndex(notification => notification.id === notificationId);
  
  if (index !== -1) {
    notifications.splice(index, 1);
    res.status(200).json({ message: "Notification deleted successfully." });
  } else {
    res.status(404).json({ error: "Notification not found." });
  }
});

