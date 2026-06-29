const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  getSummary,
  compare,
  getSnapshots,
} = require("../controllers/analyticsController");

router.get("/summary", auth, getSummary);

router.get("/compare", auth, compare);

router.get("/snapshots", auth, getSnapshots);

module.exports = router;
