const Discord = require('discord.js');
const farmJson = require('./resources/farming.json');

module.exports = {
	name: 'farm',
	aliases: ['f'],
	description: 'Get the farming details for a particular resource.',
	args: true,
	usage: '<resource>',
	execute(message, args) {
		const resource = args.join(' ').toLowerCase();
		const jsonObject = farmJson;
		if (`${jsonObject[resource]}` != undefined) {
			if (`${jsonObject[resource]['OtherLocations']}` != '') {
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Farming Details for ${resource}`)
					.setDescription(`Best place to farm is ${jsonObject[resource]['BestLocationName']} Other places to farm are: ${jsonObject[resource]['OtherLocations']}`);
				message.channel.send(jsonEmbed);
			}
			else {
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Farming Details for ${resource}`)
					.setDescription(`Best place to farm is ${jsonObject[resource]['BestLocationName']}`);
				message.channel.send(jsonEmbed);
			}
		}
		else {
			message.channel.send('If this resource exists, ask @CoYoFroYo to add it to the list.');
		}
	},
};