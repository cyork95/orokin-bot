const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'sortie',
	description: 'Get the current daily sortie.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/sortie`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Current Daily Sortie for ${platform}`);
			jsonResponse['variants'].forEach(mission => {
				if (mission['missionType'] == 'Assassination') {
					jsonEmbed.addField(`${mission['missionType']} of ${jsonResponse['boss']} on ${mission['node']}`, `Modifier: ${mission['modifierDescription']}`);
				}
				else {
					jsonEmbed.addField(`${mission['missionType']} on ${mission['node']}`, `Modifier: ${mission['modifierDescription']}`);
				}

			});
			message.channel.send(jsonEmbed);
		});
	},
};