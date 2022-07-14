const dotenv = require('dotenv');
const Discord = require("discord.js");
const config = require("./config.json");
const Logger = require('./loaders/logger');
const fs = require("fs");

dotenv.config();
const myIntents = new Discord.Intents();
myIntents.add(Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS);

const client = new Discord.Client({intents: myIntents ,partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const queue = new Map();

client.on("ready", () => {
    Logger.success(`Logged in as ${client.user.tag}!`);
    Logger.splashScreen();
});
client.once('reconnecting', () => {
    Logger.success('Reconnecting!');
});
client.once('disconnect', () => {
    Logger.success('Disconnect!');
});

client.on("messageCreate", async message => {
    //if the message is from a bot or not has prefix, ignore it       
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    const serverQueue = queue.get(message.guild.id);
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    //execute command if it exists
    if(checkCommand(command)){
        client.commands.get(command).execute(message, args, Discord, client);
    }else{
        return message.reply('Command not found. Check: !kc-help');
    }

});

client.on('guildMemberAdd', member => {
    //member.guild.channels.get('801081690465763338').send("Welcome"); 
});

client.login(process.env.BOT_TOKEN).then(() => {
    client.user.setPresence({ activities: [{ name: 'a random game', type: 'PLAYING' }], status: 'online' });
});

function isAdmin(message){
    if (!message.member.permissions.has("ADMINISTRATOR") && message.author.id !== config.ADMIN_ID){
      
      message.channel.send("You need to be an admin to use this command.");
      return false;
    } 
    return true;
}

function isOwner(message){
    if (message.author.id !== config.ADMIN_ID){
      
      message.channel.send("You need to be an admin KC-Bot to use this command.");
      return false;
    } 
    return true;    
}


function checkCommand(command){
    //find command in client.commands
    for(const [key, value] of client.commands){
        if(key === command){
            return true;
        }
    }

    return false;
}