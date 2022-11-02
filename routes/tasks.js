const express = require ('express');
const router = express.Router ();

const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require ('../controllers/tasks')

router.route ('/').get (getAllTasks)
router.route ('/').post(createTask)
router.route ('/:id').get (getTask)
router.route ('/:id').patch (updateTask)
router.route ('/:id').delete (deleteTask)

//no need for full link cause have this below in app.js
//const tasks = require ('./routes/tasks')
// app.use ('/api/v1/tasks', tasks)


module.exports = router