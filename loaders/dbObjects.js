const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

const Users = require('../models/Users')(sequelize, Sequelize.DataTypes);
const Servers = require('../models/Servers')(sequelize, Sequelize.DataTypes);


module.exports = { Users, Servers};