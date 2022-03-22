const asyncHandler = require("express-async-handler")
const transactionFEE = require("../models/computeTransactionFeeModel")

// POST /compute-transaction-fee/
const transactionFeeDetail = asyncHandler (async (req, res) => {
    try {
        const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            
        })
        const user = await newUser.save() 
        res.status(200).json(user)
        console.log(user)// prints on the terminal

        
       
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = { transactionFeeDetail }