const asyncHandler = require("express-async-handler")
const transactionFEE = require("../models/computeTransactionFeeModel")

// POST /compute-transaction-fee/
const computeTransactionFeeInfo = asyncHandler (async (req, res) => {
        const { ID, Amount, Currency, CurrencyCountry, Customer, PaymentEntity } = req.body
        
        //const { feeID, feeCurrency, feeLocale, feeEntity, entityProperty, feeType, feeValue } = req.body
    
        const TxnIDExists = await transactionFEE.findOne({ ID }) // uses ID to check if Transaction ID already exists in DB
    
        if (TxnIDExists) {
            res.status(400)
            throw new Error("Transaction ID already exists!")
        }

        TransactionAmount = Amount  // Setting Amount to TransactionAmount
    
        if (feeType == "FLAT") {
            AppliedFeeValue == feeValue
        }
        else if (feeType == "PERC") {
            feeValue = parseInt(percValue)
            AppliedFeeValue == ((feeValue / 100 )* Amount)
        }
        else if (feeType == "FLAT_PERC") {
            percValue = parseInt(percValue)
            feeValue = parseInt(flatValue)
            AppliedFeeValue == feeValue + ((percValue / 100)* Amount)
        }
        if (Customer.BearsFee == true) {
            ChargeAmount = TransactionAmount + AppliedFeeValue 
        }
        else {
            ChargeAmount = TransactionAmount
        }

        SettlementAmount = TransactionAmount - AppliedFeeValue
        
        try {
            const TxnFeeDetails = await transactionFEE.create({
                AppliedFeeID,
                AppliedFeeValue,
                ChargeAmount,
                SettlementAmount
        
            })
        
            if (TxnFeeDetails) {
                res.status(200).json({ TxnFeeDetails })
                console.log("Sucessful Entry!")
                console.log(TxnFeeDetails)
            }
        }
        catch (err){
                res.status(400)
                throw new Error("Error occured!")
            }
        })
    

module.exports = { computeTransactionFeeInfo }