const Discord = require('discord.js');
const farmJson = require('./resources/farming.json');

module.exports = {
	name: 'farm',
	description: 'Get the farming details for a particular resource.',
	ars: true,
	usage: '<resource>',
	execute(message, args) {
		const resource = args.join(' ').toLowerCase();
		const jsonObject = farmJson;
		if (`${jsonObject[resource]}` != undefined) {
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Farming Details for ${resource}`)
				.setDescription(`Best place to farm is ${jsonObject[resource]['BestLocationName']}`)
				.addField('Other places to farm are: ', ` ${jsonObject[resource]['OtherLocations']}`);
			message.channel.send(jsonEmbed);
		}
		else {
			message.channel.send('If this resource exists, ask @CoYoFroYo to add it to the list.');
		}
	},
};