const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'fissure',
	description: 'Get the current relic cracking fissures.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/fissures`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Current Fissure Missions for ${platform}`);
			jsonResponse.forEach(fissure => {
				jsonEmbed.addField(`${fissure['tier']} Relic Mission`, `${fissure['missionType']} on ${fissure['node']} with ${fissure['enemy']} enemies. This expires in ${fissure['eta']}!`);
			});
			message.channel.send(jsonEmbed);
		});
	},
};