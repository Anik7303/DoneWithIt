const router = require('express').Router()

// 404 not found route
router.use((req, res) => {
    res.status(404).json({ message: `${req.url} not found` })
})

// custom error handler
router.use((error, req, res, next) => {
    const code = error.code || 500
    const message = error.message || 'Something went wrong, please try again'
    res.status(code).json({ message })
})

module.exports = router
