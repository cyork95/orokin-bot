const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'sentient',
	description: 'Get the current sentient outpost.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/sentientOutposts`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Current Sentient Outpost for ${platform}`)
				.setDescription(`The current sentient outpost is a ${jsonResponse['mission']['type']} on ${jsonResponse['mission']['node']} with ${jsonResponse['mission']['faction']} and expires on ${jsonResponse['expiry']}!`);
			message.channel.send(jsonEmbed);
		});
	},
};