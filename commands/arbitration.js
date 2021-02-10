const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'arbi',
	description: 'Get latest arbitration data.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/arbitration`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle('Arbitration Information')
				.setDescription(`The Arbitration is a ${jsonResponse['type']} mission on ${jsonResponse['node']} and expires at ${jsonResponse['expiry']}!`);
			message.channel.send(jsonEmbed);
		});
	},
};