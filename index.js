const dotenv = require('dotenv');
const Logger = require('./loaders/logger');
const { ShardingManager } = require('discord.js');
//load enironment variables
dotenv.config();
//load the bot
const manager = new ShardingManager('./bot.js', {token: process.env.BOT_TOKEN});
//start the bot
manager.on('shardCreate', shard => Logger.success(`Launched shard ${shard.id}`));
manager.spawn();