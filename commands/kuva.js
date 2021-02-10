const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'kuva',
	description: 'Get the current kuva missions.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/kuva`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			if (jsonResponse == '') {
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Kuva Information for ${platform}`)
					.setDescription('There is currently no kuva data!');
				message.channel.send(jsonEmbed);
			}
			else {
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle('Kuva Information');
				jsonResponse.forEach(mission => {
					jsonEmbed.addField[`${mission['type']} on ${mission['node']} with the ${mission['enemy']} this kuva mission expires at ${mission['expiry']}`];
				});
				message.channel.send(jsonEmbed);
			}
		});
	},
};