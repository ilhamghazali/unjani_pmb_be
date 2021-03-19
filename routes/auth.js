const express = require('express');
const router = express.Router();

const Auth = require('../app/middleware/auth');

//Authorization
router.post('/getToken',Auth.getToken);
router.post('/verifyToken',Auth.verifyToken);

module.exports = router;