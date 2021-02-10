const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'conclave',
	description: 'Get latest challenge data.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/conclaveChallenges`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Conclave Challenges for ${platform}`);
			jsonResponse.forEach(challenge => {
				jsonEmbed.addField(`${challenge['title']}`, `${challenge['asString']}`);
			});
			message.channel.send(jsonEmbed);
		});
	},
};