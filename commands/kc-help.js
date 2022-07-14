const fs = require("fs");
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

module.exports = {
    name: "kc-help",
    description: "Display all commands",
    async execute(message,args,Discord, client){
        
        str = 'All commands:\n';
        for (const file of commandFiles) {
            const command = require(`./${file}`);
            str += `${command.name} - ${command.description}\n`;
        }

		message.channel.send(str, {code:true});
    }
}