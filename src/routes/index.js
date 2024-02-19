const express = require("express");

const v1Routes = require("./v1");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/v1", v1Routes);

module.exports = router;
