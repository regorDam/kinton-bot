module.exports = (sequelize, DataTypes) => {
	return sequelize.define('servers', {
		server_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		api_token:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		guild_id:{
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},		
	}, {
		timestamps: false,
	});
};