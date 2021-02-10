const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'invasion',
	description: 'Get the current invasions.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/invasions`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle('Current Invasion Missions');
			jsonResponse.forEach(invasion => {
				if (invasion['desc'] == 'Phorid Manifestation' || invasion['desc'] == 'Infested Outbreak') {
					jsonEmbed.addField(`${invasion['desc']}`, `The ${invasion['attackingFaction']} are attacking the ${invasion['defendingFaction']} on ${invasion['node']}. The ${invasion['defendingFaction']} are offering ${invasion['defenderReward']['itemString']} to get rid of the infestation!`);
				}
				else {
					jsonEmbed.addField(`${invasion['desc']}`, `The ${invasion['attackingFaction']} are attacking the ${invasion['defendingFaction']} on ${invasion['node']}. The ${invasion['attackingFaction']} are offering ${invasion['attackerReward']['itemString']} and the ${invasion['defendingFaction']} are offering ${invasion['defenderReward']['itemString']}!`);
				}
			});
			message.channel.send(jsonEmbed);
		});
	},
};