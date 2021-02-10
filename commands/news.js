const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'news',
	description: 'Get the current ongoing news.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/news`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle('Current News');
			jsonResponse.forEach(news => {
				jsonEmbed.addField(`${news['message']}`, `${news['asString']}`);
			});
			message.channel.send(jsonEmbed);
		});
	},
};