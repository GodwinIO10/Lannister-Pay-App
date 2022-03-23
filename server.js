const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const port = process.env.PORT || 7000
const feesRoute = require("./routes/feesRoute")
const computeTransactionFeeRoute = require("./routes/computeTransactionFeeRoute")
const { notFound, errorHandler } = require("./middlewares/errorMiddleware")


app.use(cors())
app.use(express.json()) 
connectDB()

// TO CONFIRM SERVER IS HEALTHY
app.get("/", (req, res) => { 
    res.status(200).send({ code: 201, message: "Server is ok" })
})

// FEE SETUP ENDPOINT
app.use("/fees", feesRoute)

// FEE COMPUTATION ENDPOINT
app.use("/compute-transaction-fee", computeTransactionFeeRoute)


app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})