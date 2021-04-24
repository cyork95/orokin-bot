const unirest = require('unirest');
const Discord = require('discord.js');

module.exports = {
	name: 'relic',
	aliases: ['r'],
	description: 'Get the drop details for a particular relic.',
	args: true,
	usage: '<tier (axi, neo, etc)> <relic_name (a1, b1, ect.)> <relic_level (optional) (intact, exeptional, ect.)>',
	execute(message, args) {
		const tier = args[0].charAt(0).toUpperCase() + args[0].slice(1);
		const relic_name = args[1].charAt(0).toUpperCase() + args[1].slice(1);
		let relic_level = 'Intact';
		if (args[2]) {
			if(args[2].toLowerCase() == 'flawless' || args[2].toLowerCase() == 'exceptional' || args[2].toLowerCase() == 'radiant') {
				relic_level = args[2].charAt(0).toUpperCase() + args[2].slice(1);
			}
		}
		const req = unirest('GET', ` http://drops.warframestat.us/data/relics/${tier}/${relic_name}.json`);
		req.end(function(res) {
			if (res.error) {
				message.channel.send('I can\'t find that relic. You sure it exists?');
				return;
			}
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Relic Drops for ${relic_level} ${tier} ${relic_name} Relic`);
			jsonResponse['rewards'][relic_level].forEach(reward => {
				jsonEmbed.addField(`${reward['itemName']}`, `${reward['rarity']} drop with a chance of ${reward['chance']}%`);
			});
			message.channel.send(jsonEmbed);
		});
	},
};