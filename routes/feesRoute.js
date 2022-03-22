const express = require("express")
const router = express.Router()
const { feeDetail } = require("../controllers/feesController")



router.post("/", feeDetail) 


module.exports = router