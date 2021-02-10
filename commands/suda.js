const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'suda',
	description: 'Get the current Cephalon Suda syndicate missions.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/syndicateMissions`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle('Current Cephalon Suda Syndicate Missions');
			jsonResponse.forEach(mission => {
				mission['nodes'].forEach(node => {
					if(mission['syndicate'] == 'Cephalon Suda') {
						jsonEmbed.addField('Misson on: ', `${node}`);
					}
				});
			});
			message.channel.send(jsonEmbed);
		});
	},
};