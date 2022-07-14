module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		user_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		discord_id:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		steam_id: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false,
		},
		guild_id:{
			type: DataTypes.STRING,
			allowNull: false,
		},		
	}, {
		timestamps: false,
	});
};