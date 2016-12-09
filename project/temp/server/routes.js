// calling controller functions when routes are hit
const router = require('express').Router()
const controllers = require('./controllers')

// api/ server roots

// user
router.get('/user', controllers.auth.get)
router.post('/user', controllers.auth.post)

// export router for server.js
module.exports = router