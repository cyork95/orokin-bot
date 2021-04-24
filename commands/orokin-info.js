const Discord = require('discord.js');

module.exports = {
	name: 'orokin-info',
	aliases: ['oi', 'bot-info'],
	description: 'Bot Info',
	guildOnly: true,
	execute(message) {
		const serverInfoEmbed = new Discord.MessageEmbed()
			.setTitle('OrokinBot')
			.setDescription('Warframe bot created for CoYo\'s Discord Servers! FOr bug report send dm with bugs to @CoYoFroYo on Discord!')
			.setFooter('Created by CoYoFroYo (2021)');
		message.channel.send(serverInfoEmbed);
	},
};