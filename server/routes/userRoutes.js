const express = require('express');
const { registerController, loginController } = require('../controllers/user Controller'); // Corrected file name

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);

module.exports = router;
