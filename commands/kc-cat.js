const axios = require('axios').default;
module.exports = {
    name: "kc-cat",
    description: "Display a random cat",
    async execute(message,args,Discord, client){

        const { file } = await axios.get('https://aws.random.cat/meow').then(response => response.data);
    	return message.channel.send(file);
    }
}