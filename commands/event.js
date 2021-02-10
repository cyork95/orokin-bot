const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'event',
	description: 'Get the current ongoing events.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/events`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle('Current Events');
			jsonResponse.forEach(event => {
				jsonEmbed.addField(`${event['description']}`, `${event['asString']}`);
			});
			message.channel.send(jsonEmbed);
		});
	},
};