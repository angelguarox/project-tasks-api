"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../database/database"));

var _tasksModels = _interopRequireDefault(require("./tasksModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Projects = _database["default"].define('projects', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  priority: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  deliverydate: {
    type: _sequelize.DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: false
});

Projects.hasMany(_tasksModels["default"], {
  foreignKey: 'projectId',
  sorceKey: 'id'
});

_tasksModels["default"].belongsTo(Projects, {
  foreignKey: 'projectId',
  sorceKey: 'id'
});

var _default = Projects;
exports["default"] = _default;