"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTasks = getAllTasks;
exports.getOneTask = getOneTask;
exports.createTask = createTask;
exports.deleteTask = deleteTask;
exports.updateTask = updateTask;
exports.getTaskByProject = getTaskByProject;

var _tasksModels = _interopRequireDefault(require("../models/tasksModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAllTasks(_x, _x2) {
  return _getAllTasks.apply(this, arguments);
}

function _getAllTasks() {
  _getAllTasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var allTasks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _tasksModels["default"].findAll();

          case 3:
            allTasks = _context.sent;
            console.log(allTasks);
            return _context.abrupt("return", res.json({
              message: 'Tasks list',
              data: allTasks
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getAllTasks.apply(this, arguments);
}

function getOneTask(_x3, _x4) {
  return _getOneTask.apply(this, arguments);
}

function _getOneTask() {
  _getOneTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, oneTask;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _tasksModels["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            oneTask = _context2.sent;
            console.log(oneTask);
            return _context2.abrupt("return", res.json({
              message: 'Task found',
              data: oneTask
            }));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _getOneTask.apply(this, arguments);
}

function createTask(_x5, _x6) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, done, projectId, newTask;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectId = _req$body.projectId;
            _context3.prev = 1;
            _context3.next = 4;
            return _tasksModels["default"].create({
              name: name,
              done: done,
              projectId: projectId
            }, {
              fields: ['name', 'done', 'projectId']
            });

          case 4:
            newTask = _context3.sent;

            if (!newTask) {
              _context3.next = 8;
              break;
            }

            console.log(newTask);
            return _context3.abrupt("return", res.json({
              message: 'Task created successfully',
              data: newTask
            }));

          case 8:
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return _createTask.apply(this, arguments);
}

function deleteTask(_x7, _x8) {
  return _deleteTask.apply(this, arguments);
}

function _deleteTask() {
  _deleteTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _deleteTask2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _tasksModels["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            _deleteTask2 = _context4.sent;
            console.log(_deleteTask2);
            return _context4.abrupt("return", res.json({
              message: 'Task deleted successfully',
              count: _deleteTask2
            }));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 9]]);
  }));
  return _deleteTask.apply(this, arguments);
}

function updateTask(_x9, _x10) {
  return _updateTask.apply(this, arguments);
}

function _updateTask() {
  _updateTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, name, done, projectId, listTasks;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, done = _req$body2.done, projectId = _req$body2.projectId;
            _context6.next = 4;
            return _tasksModels["default"].findAll({
              attributes: ['id', 'name', 'done', 'projectId'],
              where: {
                id: id
              }
            });

          case 4:
            listTasks = _context6.sent;
            _context6.prev = 5;

            if (listTasks.length > 0) {
              listTasks.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(Tasks) {
                  var editTask;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return Tasks.update({
                            name: name,
                            done: done,
                            projectId: projectId
                          });

                        case 2:
                          editTask = _context5.sent;

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x13) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            console.log(listTasks);
            return _context6.abrupt("return", res.json({
              message: 'Task updated successfully',
              data: listTasks
            }));

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](5);
            console.log(_context6.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[5, 11]]);
  }));
  return _updateTask.apply(this, arguments);
}

function getTaskByProject(_x11, _x12) {
  return _getTaskByProject.apply(this, arguments);
}

function _getTaskByProject() {
  _getTaskByProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var projectId, tasksByProjects;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            projectId = req.params.projectId;
            _context7.prev = 1;
            _context7.next = 4;
            return _tasksModels["default"].findAll({
              where: {
                projectId: projectId
              }
            });

          case 4:
            tasksByProjects = _context7.sent;
            console.log(tasksByProjects);
            return _context7.abrupt("return", res.json({
              message: 'Tasks list by Projects',
              data: tasksByProjects
            }));

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 9]]);
  }));
  return _getTaskByProject.apply(this, arguments);
}