const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'nightwave',
	description: 'Get the current nightwave challenges.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/nightwave`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Current Nightwave Challenges for ${platform}`);
			jsonResponse['activeChallenges'].forEach(challenge => {
				jsonEmbed.addField(`${challenge['title']}`, `${challenge['desc']}! This is worth ${challenge['reputation']} nightwave reputation!`);
			});
			message.channel.send(jsonEmbed);
		});
	},
};