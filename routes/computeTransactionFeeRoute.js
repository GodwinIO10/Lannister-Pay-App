const express = require("express")
const router = express.Router()
const { computeTransactionFeeInfo } = require("../controllers/computeTransactionFeeController")



// This is /compute-transaction-fee endpoint (POST method)
router.post("/", computeTransactionFeeInfo) 


module.exports = router