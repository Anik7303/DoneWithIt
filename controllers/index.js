const {
    deleteListing,
    getListings,
    postListing,
    putListing,
} = require('./listing')
const { login, register } = require('./auth')
const { userListings } = require('./user')

module.exports = {
    deleteListing,
    getListings,
    login,
    postListing,
    putListing,
    register,
    userListings,
}
