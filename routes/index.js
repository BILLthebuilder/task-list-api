const router = require('express').Router();
const UsersController = require('../controllers/usersController');
const TasksController = require('../controllers/tasksController');

router.post('/personel/signup', UsersController.signup);
router.post('/personel/login', UsersController.login);
router.post('/tasks', TasksController.createTask);
router.get('/tasks', TasksController.listAndCountTasks);

module.exports = router;
