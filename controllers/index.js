const {
    deleteProduct,
    getProducts,
    postProduct,
    putProduct,
} = require('./product')
const { login, register } = require('./auth')

module.exports = {
    deleteProduct,
    getProducts,
    login,
    postProduct,
    putProduct,
    register,
}
