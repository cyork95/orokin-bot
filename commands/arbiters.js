const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'arbiters',
	description: 'Get the current Arbiters of Hexis syndicate missions.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/syndicateMissions`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle('Current Arbiters of Hexis Syndicate Missions');
			jsonResponse.forEach(mission => {
				mission['nodes'].forEach(node => {
					if(mission['syndicate'] == 'Arbiters of Hexis') {
						jsonEmbed.addField('Misson on: ', `${node}`);
					}
				});
			});
			message.channel.send(jsonEmbed);
		});
	},
};