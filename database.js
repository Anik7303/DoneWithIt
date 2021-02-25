const mongoose = require('mongoose')

const mongoConfigs = {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose
    .connect(process.env.MONGO_URI, mongoConfigs)
    .catch((err) => console.error({ MongoConnectError: err }))

mongoose.connection.on('connected', () => console.log({ msg: 'connected' }))
mongoose.connection.on('error', (error) => console.error({ MongoError: error }))
