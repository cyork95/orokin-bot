const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'vallis-cycle',
	description: 'Get the current vallis cycle.',
	execute(message) {
		const vallisReq = unirest('GET', `https://api.warframestat.us/${platform}/vallisCycle`);
		const jsonEmbed = new Discord.MessageEmbed();
		vallisReq.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			if (jsonResponse['isWarm']) {
				jsonEmbed.addField('Orb Vallis', `It is currently warm until ${jsonResponse['timeLeft']}!`);
			}
			else {
				jsonEmbed.addField('Orb Vallis', `It is currently cold until ${jsonResponse['timeLeft']}!`);
			}
			message.channel.send(jsonEmbed);
		});
	},
};