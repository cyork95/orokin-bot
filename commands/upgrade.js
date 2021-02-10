const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'upgrade',
	description: 'Get the current tenno upgrades.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/globalUpgrades`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle('Current Global Upgrades');
			jsonResponse.forEach(upgrade => {
				jsonEmbed.addField(`${upgrade['upgrade']}`, `${upgrade['desc']}!`);
			});
			message.channel.send(jsonEmbed);
		});
	},
};