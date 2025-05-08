const express = require('express')
const router = express.Router()

const Controller = require("../Controller")
const upload = require("../Multer")

router.post("/", upload.single("file"), Controller.create)

module.exports = router;