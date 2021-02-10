const Discord = require('discord.js');
const farmJson = require('./resources/farming.json');

module.exports = {
	name: 'farm',
	description: 'Get the farming details for a particular resource.',
	ars: true,
	usage: '<resource>',
	execute(message, args) {
		const jsonObject = farmJson;
		if (`${jsonObject[args[0]]}` != 'undefined') {
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Farming Details for ${args[0]}`)
				.setDescription(`Best place to farm is ${jsonObject[args[0]]['BestLocationName']}`)
				.addField('Other places to farm are: ', ` ${jsonObject[args[0]]['OtherLocations']}`);
			message.channel.send(jsonEmbed);
		}
		else {
			message.channel.send('If this resource exists, ask @CoYoFroYo to add it to the list.');
		}
	},
};