const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    service: "CodePulse API",
    version: "1.0.0",
    status: "Running",
  });
});

module.exports = app;
