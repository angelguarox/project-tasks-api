import {Sequelize, DataTypes} from 'sequelize';
import sequelize from '../database/database';
import Tasks from './tasksModels';

const Projects = sequelize.define('projects', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false
	},
	name: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	priority: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	deliverydate: {
		type: DataTypes.DATE,
		allowNull: false
	}
}, {
	timestamps: false
});

Projects.hasMany(Tasks, {foreignKey: 'projectId', sorceKey: 'id'});
Tasks.belongsTo(Projects, {foreignKey: 'projectId', sorceKey: 'id'});

export default Projects;