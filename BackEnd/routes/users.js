var express = require("express")

var router = express.Router()

const {Register, Login}= require ("../controllers/users.controllers.js")

router.post('/register',Register)
router.post('/login',Login)



module.exports = router;