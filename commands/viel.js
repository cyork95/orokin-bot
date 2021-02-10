const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'veil',
	description: 'Get the current Red Veil syndicate missions.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/syndicateMissions`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle('Current Red Veil Syndicate Missions');
			jsonResponse.forEach(mission => {
				mission['nodes'].forEach(node => {
					if(mission['syndicate'] == 'Red Veil') {
						jsonEmbed.addField('Misson on: ', `${node}`);
					}
				});
			});
			message.channel.send(jsonEmbed);
		});
	},
};