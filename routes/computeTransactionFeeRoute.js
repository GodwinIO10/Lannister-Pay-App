const express = require("express")
const router = express.Router()
const { computeTransactionFeeInfo } = require("../controllers/computeTransactionFeeController")




router.post("/", computeTransactionFeeInfo) 


module.exports = router