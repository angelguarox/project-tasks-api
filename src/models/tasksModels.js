import {Sequelize, DataTypes} from 'sequelize';
import sequelize from '../database/database';

const Tasks = sequelize.define('tasks', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false
	},
	name: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	done: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	},
	projectId: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
}, {
	timestamps: false
});

export default Tasks;