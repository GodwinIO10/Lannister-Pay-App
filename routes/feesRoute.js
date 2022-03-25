const express = require("express")
const router = express.Router()
const { feeEntry } = require("../controllers/feesController")


// This is /fee endpoint (POST method)
router.post("/", feeEntry) 


module.exports = router