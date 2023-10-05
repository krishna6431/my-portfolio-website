const express = require("express");
const { sendEmailController } = require("../controllers/portfolioContoller");

//router object
const router = express.Router();

//routes
router.post("/sendEmail", sendEmailController);
router.post("/success", (req, res) => {
  console.log("get request");
  res.status(200).send({
    success: true,
    message: "Your Message Send Successfully",
  });
});

// /export
module.exports = router;
