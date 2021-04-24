const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'cambion-cycle',
	aliases: ['cambion', 'camc'],
	description: 'Get the current cambion cycle.',
	execute(message) {
		const cambionReq = unirest('GET', `https://api.warframestat.us/${platform}/cambionCycle`);
		const jsonEmbed = new Discord.MessageEmbed();
		cambionReq.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			jsonEmbed.addField(`Cambion Drift Cycle on ${platform}`, `It is currently ${jsonResponse['active']} until ${jsonResponse['activation'].substring(11, 19)}!`);
			message.channel.send(jsonEmbed);
		});
	},
};