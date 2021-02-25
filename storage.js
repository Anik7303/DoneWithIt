const path = require('path')

const multer = require('multer')
const { v4: uuidv4 } = require('uuid')

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, 'assets'),
    filename: (req, file, callback) => {
        const parts = file.originalname.split('.')
        const extension = parts[parts.length - 1]
        const filename = `${uuidv4()}.${extension}`
        callback(null, filename)
    },
})

const fileFilter = (req, file, callback) => {
    const acceptedExts = ['image/jpg', 'image/jpeg', 'image/png']
    if (acceptedExts.includes(file.mimetype)) return callback(null, true)

    return callback(null, false)
}

module.exports = multer({ storage, fileFilter }).array('images')
