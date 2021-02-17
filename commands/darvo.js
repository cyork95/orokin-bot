const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'darvo',
	description: 'Get the daily Darvo deal.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/dailyDeals`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Darvo Daily Deal for ${platform}`)
				.setDescription(`The Daily Darvo Deal is ${jsonResponse[0]['item']} for ${jsonResponse[0]['salePrice']}plat originally ${jsonResponse[0]['originalPrice']}plat!`);
			message.channel.send(jsonEmbed);
		});
	},
};