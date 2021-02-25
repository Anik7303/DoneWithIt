// loading environment variables from .env file
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
// connecting to mongodb server
require('./database')

const cors = require('cors')
const express = require('express')

// routes
const routes = require('./routes')
const errorRoutes = require('./routes/error')

const app = express()

// setup cors
app.use(cors())
// using express's bodyparser implementation
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// using multer to store files
app.use(require('./storage'))

app.use(routes)
app.use(errorRoutes)

app.listen(process.env.PORT, () =>
    console.log(`server connected to port ${process.env.PORT}`)
)
