const mongoose = require("mongoose")

const FCSSchema = new mongoose.Schema(

    { 
        feeID: { 
            type: String, 
            required: true, 
            unique: true, 
        },
        feeCurrency: { 
            type: String, 
            required: true, 
        },
        feeLocale: { 
            type: String, 
            required: true, 
        },
        feeEntity: { 
            type: String, 
            required: true,
            enum: ["CREDIT-CARD", "DEBIT-CARD", "BANK-ACCOUNT", "USSD", "WALLET-ID"] 
        },
        entityProperty: { 
            type: String, 
            required: true, 
        },
        feeType: { 
            type: String, 
            required: true,
            enum: ["FLAT", "PERC", "FLAT_PERC"] 
        },
        feeValue: { 
            if: {type: Number},
            then: {minimum: 0},
            else: {type: String}, 
        },
        
    }, { timestamps: true }, 

)


module.exports = mongoose.model("FCS", FCSSchema) 