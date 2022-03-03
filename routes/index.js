const router = require('express').Router();
const UsersController = require('../controllers/usersController');

router.post('/personel/signup', UsersController.signup);
router.post('/personel/login', UsersController.login);

module.exports = router;
