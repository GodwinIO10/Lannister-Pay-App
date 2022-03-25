// creating express application
const express = require("express")
const app = express()


// connecting to mongoDB
require("dotenv").config()
const connectDB = require("./config/db")
connectDB()


// choosing port to start server
const port = process.env.PORT || 7000


// importing custom modules
const feesRoute = require("./routes/feesRoute")
const computeTransactionFeeRoute = require("./routes/computeTransactionFeeRoute")
const { notFound, errorHandler } = require("./middlewares/errorMiddleware")


// enabling parsing of json object in the body of a request
const cors = require("cors")
app.use(cors())
app.use(express.json()) 


// confirming server is healthy
app.get("/", (req, res) => { 
    res.status(200).send({ code: 201, message: "Server is ok" })
})


// specifying fee handler
app.use("/fees", feesRoute)
                           

// specifying fee-computation handler
app.use("/compute-transaction-fee", computeTransactionFeeRoute)


// error-handling middlewares
app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
