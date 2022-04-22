const express = require("express");
const db = require("./db/zodiacSigns");

const router = express.Router();

router.get("/api/zodiac-signs/:sign", async (req, res) => {
  const data = await db.getSignInformation(req.params.sign);
  res.status(200).json({ data });
});

module.exports = router;
