const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'simaris',
	description: 'Get the current simaris target.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/simaris`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Current Simaris Target for ${platform}`)
				.setDescription(`${jsonResponse['asString']}`);
			message.channel.send(jsonEmbed);
		});
	},
};