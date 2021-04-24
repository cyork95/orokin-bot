const Items = require('warframe-items');
const Discord = require('discord.js');

module.exports = {
	name: 'search-fish',
	aliases: ['fish'],
	description: 'Search for Fish Info!',
	args: true,
	usage: '<fish name>',
	execute(message, args) {
		const argsName = args.join(' ').toLowerCase();
		const fish = new Items({ category: ['Fish'] });
		const searchedFish = fish.find(record => record.name.toLowerCase() === argsName);
		if (searchedFish != undefined) {
			const name = searchedFish.name;
			const description = searchedFish.description;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Fish Information for ${name}`)
				.setDescription(`${description}`);
			message.channel.send(jsonEmbed);
		}
		else {
			message.channel.send('Sorry I couldnt find that Fish. Did you spell it correctly?');
		}
	},
};