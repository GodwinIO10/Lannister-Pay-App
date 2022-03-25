const asyncHandler = require("express-async-handler")
const FCS = require("../models/feesModel")

// POST /fees/
const feeEntry = asyncHandler (async (req, res) => {
    const { feeID, feeCurrency, feeLocale, feeEntity, entityProperty, feeType, feeValue, flatValue, percValue } = req.body

    const feeIDExists = await FCS.findOne({ feeID }) // uses feeID to check if feeID already exists in DB

    if (feeIDExists) {
        res.status(400)
        throw new Error("Fee ID already exists!")
    }

    const customFCS = await FCS.create({
        feeID,
        feeCurrency,
        feeLocale,
        feeEntity,
        entityProperty,
        feeType,
        feeValue,
        flatValue,
        percValue

    })

    if (customFCS) {
        console.log("Successful Entry!")
        res.status(200).json({ // server is sending back to client
        
        })
    }
    else {
        res.status(400)
        throw new Error("Error occured!")
    } 
})

module.exports = { feeEntry }