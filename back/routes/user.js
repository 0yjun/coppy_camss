const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.send("hello");
  } catch (error) {}
});

router.post("/", async (req, res, next) => {
  try {
    res.send("hello");
  } catch (error) {}
});

module.exports = router;
