const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'barro',
	description: 'List barro\'s inventory.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/voidTrader`);

		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			if(jsonResponse['inventory'] == '') {
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Barro Information for ${platform}`)
					.setDescription(`${jsonResponse['character']} will be at ${jsonResponse['location']} in ${jsonResponse['startString']}!`);
				message.channel.send(jsonEmbed);
			}
			else {
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Barro Information for ${platform}`)
					.setDescription(`${jsonResponse['character']} is at ${jsonResponse['location']}`);
				jsonResponse['inventory'].forEach(item => {
					jsonEmbed.setField(item['item'], `Ducat Cost is ${item['ducats']} and Credit Cost is ${item['credits']}`);
				});
				message.channel.send(jsonEmbed);
			}
		});
	},
};