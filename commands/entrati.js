const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'entrati',
	description: 'Get the current entrati syndicate missions.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/syndicateMissions`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Current Ostron Syndicate Missions for ${platform}`);
			jsonResponse.forEach(mission => {
				mission['jobs'].forEach(job => {
					if(mission['syndicate'] == 'Entrati') {
						jsonEmbed.addField(`${job['type']}`, `with levels [${job['enemyLevels']}] for [${job['standingStages']}] repution. \nPossible rewards of ${job['rewardPool']}!`);
					}
				});
			});
			message.channel.send(jsonEmbed);
		});
	},
};