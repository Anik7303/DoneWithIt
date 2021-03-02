const {
    deleteListing,
    getListings,
    postListing,
    putListing,
} = require('./listing')
const { login, register } = require('./auth')

module.exports = {
    deleteListing,
    getListings,
    login,
    postListing,
    putListing,
    register,
}
