"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _projectsControllers = require("../controllers/projectsControllers");

var router = (0, _express.Router)();
router.get('/', _projectsControllers.getAllProjects);
router.get('/:id', _projectsControllers.getOneProject);
router.post('/', _projectsControllers.createProject);
router["delete"]('/:id', _projectsControllers.deleteProject);
router.put('/:id', _projectsControllers.updateProject);
var _default = router;
exports["default"] = _default;