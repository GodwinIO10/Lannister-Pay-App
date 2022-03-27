const mongoose = require("mongoose")

const CTFSchema = new mongoose.Schema(

    { 
        ID: { 
            type: Number, 
            required: true, 
            unique: true, 
        },
        Amount: { 
            type: Number,
            min: 0, 
            required: true, 
        },
        Currency: { 
            type: String, 
            required: true,
        },
        CurrencyCountry: { 
            type: String, 
            required: true, 
        },
        Customer: { 
            ID: {type: Number, required: true, unique: true}, 
            EmailAddress: {type: String},
            FullName: {type: String, required: true}, 
            BearsFee: {type: Boolean},
        },
        PaymentEntity: { 
            ID: {type: Number, required: true, unique: true},
            Issuer: {type: String, required: true},
            Brand: {type: String},
            Number: {type: String, required: true},
            SixID: {type: String, required: true},
            Type: {type: String, required: true},
            Country: {type: String, required: true},
        },
        
    }, { timestamps: true }, 

)


module.exports = mongoose.model("CTFS", CTFSchema) 