const Discord = require('discord.js');

module.exports = {
	name: 'orokin-info',
	description: 'Bot Info',
	guildOnly: true,
	execute(message) {
		const serverInfoEmbed = new Discord.MessageEmbed()
			.setTitle('OrokinBot')
			.setDescription('Warframe bot created for CoYo\'s Discord Servers!')
			.setFooter('Created by CoYoFroYo (2021)');
		message.channel.send(serverInfoEmbed);
	},
};