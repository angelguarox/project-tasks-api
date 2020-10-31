import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(
	'projectstasks',
	'root',
	'098098',
	{
		host: 'localhost',
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			require: 30000,
			idle: 10000
		},
		logging: false
	}
);

export default sequelize;