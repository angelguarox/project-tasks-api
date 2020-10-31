"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../database/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tasks = _database["default"].define('tasks', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  done: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false
  },
  projectId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

var _default = Tasks;
exports["default"] = _default;