const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World from Automated Container Build Pipeline!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "automated-container-build-pipeline"
  });
});

module.exports = app;
