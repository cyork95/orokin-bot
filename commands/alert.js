const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'alert',
	description: 'Get latest alert data.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/alerts`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			if (jsonResponse == '') {
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Alerts Information for ${platform}`)
					.setDescription('There is currently no alert data!');
				message.channel.send(jsonEmbed);
			}
			else {
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle('Alerts Information')
					.setDescription(`Expires on ${'expiry'}`);
				jsonResponse.forEach(mission => {
					jsonEmbed.addField[`${mission['type']} on ${mission['node']} with the ${mission['faction']} with enemies leveled ${mission['minEnemyLevel']} to ${mission['maxEnemyLevel']}`, `The reward is ${mission['reward']['asString']}`];
				});
				message.channel.send(jsonEmbed);
			}
		});
	},
};