const auth = require('./auth')
const listing = require('./listing')
const message = require('./message')
const notifications = require('./notifications')
const user = require('./user')

module.exports = {
    ...auth,
    ...listing,
    ...message,
    ...notifications,
    ...user,
}
