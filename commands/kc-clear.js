const Logger = require('../loaders/logger');
module.exports = {
    name: "kc-clear",
    description: "Clear 99 messages!",
    async execute(message,args,Discord, client){
        
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number. Ex: !kc-clear NUMBER(min 1 - max100)');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			Logger.sendError('there was an error trying to prune messages in this channel!');
		});
    }
}