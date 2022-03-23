const asyncHandler = require("express-async-handler")
const transactionFEE = require("../models/computeTransactionFeeModel")

// POST /compute-transaction-fee/
const computeTransactionFeeInfo = asyncHandler (async (req, res) => {
    
        const { feeID, feeCurrency, feeLocale, feeEntity, entityProperty, feeType, feeValue } = req.body
    
        const TxnfeeExists = await transactionFEE.findOne({ feeID }) // uses feeID to check if feeID already exists in DB
    
        if (TxnfeeExists) {
            res.status(400)
            throw new Error("Fee ID already exists!")
        }
    
        const TxnFeeDetails = await transactionFEE.create({
            feeID,
            feeCurrency,
            feeLocale,
            feeEntity,
            entityProperty,
            feeType,
            feeValue
    
        })
    
        if (TxnFeeDetails) {
            console.log("Sucessful Entry!")
            res.status(200).json({ 
            
            })
        }
        else {
            res.status(400)
            throw new Error("Error occured!")
        }
    })
    

module.exports = { computeTransactionFeeInfo }