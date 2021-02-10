const unirest = require('unirest');
const { platform } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'construction',
	description: 'Get latest challenge data.',
	execute(message) {
		const req = unirest('GET', `https://api.warframestat.us/${platform}/constructionProgress`);
		req.end(function(res) {
			if (res.error) throw new Error(res.error);
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle('Construction Progress')
				.setDescription(`The formorian progress is ${jsonResponse['fomorianProgress']}% and the Razorback progress is ${jsonResponse['razorbackProgress']}%!`);
			message.channel.send(jsonEmbed);
		});
	},
};