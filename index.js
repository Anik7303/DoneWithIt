// loading environment variables from .env file
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
// connecting to mongodb server
require('./database')

const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(process.env.PORT, () =>
    console.log(`server connected to port ${process.env.PORT || 5000}`)
)
