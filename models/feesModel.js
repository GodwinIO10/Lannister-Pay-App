const mongoose = require("mongoose")

const FCSSchema = new mongoose.Schema(

    { 
        feeID: { 
            type: String, 
            maxlength:8,
            minlength:8, 
            required: true, 
            unique: true, 
        },
        feeCurrency: { 
            type: String, 
            required: true,
            enum: ["NGN", "*"],
        },
        feeLocale: { 
            type: String, 
            required: true, 
            enum: ["LOCL", "INTL", "*"],
        },
        feeEntity: { 
            type: String, 
            required: true,
            enum: ["CREDIT-CARD", "DEBIT-CARD", "BANK-ACCOUNT", "USSD", "WALLET-ID", "*"], 
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
            type: Number,
            min: 0,
        },
        flatValue: {
            type: String,
        },
        percValue: {
            type: String,
        }
    }, { timestamps: true }, 

)

module.exports = mongoose.model("FCS", FCSSchema) 

// npx json-server -p 5500 -w data/testDB.json
// testDB -----> http://localhost:5500/FeeConfigSpec