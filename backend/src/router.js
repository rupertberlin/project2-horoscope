const express = require("express");
const db = require("./db/zodiacSigns");

const router = express.Router();

router.get("/information/zodiac-signs/:sign", async (req, res) => {
  const signs = await db.getSignInformation(req.params.sign);
  res.status(200).json({ signs });
});

module.exports = router;
