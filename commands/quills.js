const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'quils',
	description: 'Get the current Quills syndicate missions.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/syndicateMissions`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle('Current Quills Syndicate Missions');
			jsonResponse.forEach(mission => {
				mission['jobs'].forEach(job => {
					if(mission['syndicate'] == 'Quills') {
						jsonEmbed.addField(`${job['type']}`, `with levels [${job['enemyLevels']}] for [${job['standingStages']}] repution. \nPossible rewards of ${job['rewardPool']}!`);
					}
				});
			});
			message.channel.send(jsonEmbed);
		});
	},
};