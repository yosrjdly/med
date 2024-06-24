var express = require("express")

var router = express.Router()

const {Register}= require ("../controllers/users.controllers.js")

router.post('/register',Register)



module.exports = router;