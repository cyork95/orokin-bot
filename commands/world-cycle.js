const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'world-cycle',
	description: 'List barro\'s inventory.',
	execute(message) {
		const cetusReq = unirest('GET', `https://api.warframestat.us/${platform}/cetusCycle`);
		const vallisReq = unirest('GET', `https://api.warframestat.us/${platform}/vallisCycle`);
		const cambionReq = unirest('GET', `https://api.warframestat.us/${platform}/cambionCycle`);

		cetusReq.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed();
			if (jsonResponse['isDay']) {
				jsonEmbed.addField('Cetus', `It is currently day time until ${jsonResponse['timeLeft']}! Happy fishing!`);
				message.channel.send(jsonEmbed);
			}
			else {
				jsonEmbed.addField('Cetus', `It is currently night time until ${jsonResponse['timeLeft']}, don't go out!`);
				message.channel.send(jsonEmbed);
			}
		});
		vallisReq.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed();
			if (jsonResponse['isWarm']) {
				jsonEmbed.addField('Orb Vallis', `It is currently warm until ${jsonResponse['timeLeft']}!`);
				message.channel.send(jsonEmbed);
			}
			else {
				jsonEmbed.addField('Orb Vallis', `It is currently cold until ${jsonResponse['timeLeft']}!`);
				message.channel.send(jsonEmbed);
			}
		});
		cambionReq.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed();
			jsonEmbed.addField('Cambion Drift', `It is currently ${jsonResponse['active']} until ${jsonResponse['activation'].substring(11, 19)}!`);
			message.channel.send(jsonEmbed);
		});
	},
};