const router = require('express').Router();
const UsersController = require('../controllers/usersController');
const TasksController = require('../controllers/tasksController');
const Auth = require('../middleware/auth');

router.post('/personel/signup', UsersController.signup);
router.post('/personel/login', UsersController.login);
router.post('/tasks', Auth.verifyToken,TasksController.createTask);
router.get('/tasks', Auth.verifyToken,TasksController.listAndCountTasks);

module.exports = router;
