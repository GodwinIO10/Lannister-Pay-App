const asyncHandler = require("express-async-handler")
const UserFee = require("../models/feesModel")

// POST /fees/
const feeDetail = asyncHandler (async (req, res) => {
    const { feeID, feeCurrency, feeLocale, feeEntity, entityProperty, feeType, feeValue } = req.body

    const feeIDExists = await UserFee.findOne({ feeID }) // uses feeID to check if feeID already exists in DB

    if (feeIDExists) {
        //res.status(400)
        throw new Error("Fee ID already exists!")
    }

    const UserFeeDetails = await UserFee.create({
        feeID,
        feeCurrency,
        feeLocale,
        feeEntity,
        entityProperty,
        feeType,
        feeValue

    })

    if (UserFeeDetails) {
        console.log("Successful Entry!")
        res.status(200).json({ // server is sending back to client
        
        })
    }
    else {
        res.status(400)
        throw new Error("Error occured!")
    }
})

module.exports = { feeDetail }