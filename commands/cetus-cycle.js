const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'cetus-cycle',
	aliases: ['cc'],
	description: 'Get the current cetus cycle.',
	execute(message) {
		const cetusReq = unirest('GET', `https://api.warframestat.us/${platform}/cetusCycle`);
		const jsonEmbed = new Discord.MessageEmbed();
		cetusReq.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			if (jsonResponse['isDay']) {
				jsonEmbed.addField(`Cetus Cycle on ${platform}`, `It is currently day time until ${jsonResponse['timeLeft']}! Happy fishing!`);
				message.channel.send(jsonEmbed);
			}
			else {
				jsonEmbed.addField('Cetus', `It is currently night time until ${jsonResponse['timeLeft']}, don't go out!`);
				message.channel.send(jsonEmbed);
			}
		});
	},
};