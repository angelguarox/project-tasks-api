"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasksControllers = require("../controllers/tasksControllers");

var router = (0, _express.Router)();
router.get('/', _tasksControllers.getAllTasks);
router.get('/:id', _tasksControllers.getOneTask);
router.post('/', _tasksControllers.createTask);
router["delete"]('/:id', _tasksControllers.deleteTask);
router.put('/:id', _tasksControllers.updateTask);
router.get('/tasksbyprojects/:projectId', _tasksControllers.getTaskByProject);
var _default = router;
exports["default"] = _default;