const express = require("express");
const { sendEmailController } = require("../controllers/portfolioContoller");

//router object
const router = express.Router();

//routes
router.post("/sendEmail", sendEmailController);
router.get("/success", (req, res) => {
  res.json({ success: true });
});

// /export
module.exports = router;
