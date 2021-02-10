const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'solaris',
	description: 'Get the current Solaris United syndicate missions.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/syndicateMissions`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle('Current Solaris United Syndicate Missions');
			jsonResponse.forEach(mission => {
				mission['jobs'].forEach(job => {
					if(mission['syndicate'] == 'Solaris United') {
						jsonEmbed.addField(`${job['type']}`, `with levels [${job['enemyLevels']}] for [${job['standingStages']}] repution. \nPossible rewards of ${job['rewardPool']}!`);
					}
				});
			});
			message.channel.send(jsonEmbed);
		});
	},
};