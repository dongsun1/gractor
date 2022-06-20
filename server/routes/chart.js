const express = require("express");
const router = express.Router();

router.get("/pieChart", async (req, res) => {
  console.log("a");
  res.json({
    result: "success",
    name: ["빗물받이", "스마트폴", "자가망"],
    value: [80, 9, 5],
  });
});

router.get("/barChart", async (req, res) => {
  res.json({
    result: "success",
    name: ["쾌적", "양호", "보통", "불량", "불쾌"],
    value: [1, 4, 43, 27, 5],
  });
});

module.exports = router;
