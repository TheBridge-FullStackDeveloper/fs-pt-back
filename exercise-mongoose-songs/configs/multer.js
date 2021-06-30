const multer = require('multer')

const check = fields => (req, file, next) => {
    for(field of fields) {
        if(!req.body[field]) {
            return next({ info: new Error('something went wrong!') })
        }
    }
    
    next(null, true)
}

const upload = multer({
    dest: 'uploads',
    fileFilter: check(['username']),
})

module.exports = {
    single: upload.single('profile_image')
}