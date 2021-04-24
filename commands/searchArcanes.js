const Items = require('warframe-items');
const Discord = require('discord.js');

module.exports = {
	name: 'search-arcane',
	aliases: ['sar'],
	description: 'Search for Arcanes!',
	args: true,
	usage: '<arcane name>',
	execute(message, args) {
		const argsName = args.join(' ').toLowerCase();
		const arcanes = new Items({ category: ['Arcanes'] });
		const searchedArcane = arcanes.find(record => record.name.toLowerCase() === argsName);
		if (searchedArcane != undefined) {
			const name = searchedArcane.name;
			const rarity = searchedArcane.rarity;
			const level0 = searchedArcane.levelStats[0].stats;
			const level1 = searchedArcane.levelStats[1].stats;
			const level2 = searchedArcane.levelStats[2].stats;
			const level3 = searchedArcane.levelStats[3].stats;
			const level4 = searchedArcane.levelStats[4].stats;
			const level5 = searchedArcane.levelStats[5].stats;
			let drops = '';
			searchedArcane.drops.forEach(drop => {
				drops += `Drops from ${drop.location} with a ${drop.chance} chance.\n`;
			});
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Arcane Information for ${name}`)
				.setDescription(`${rarity}`)
				.addFields(
					{ name: 'Level 0 Stats: ', value: `${level0}` },
					{ name: 'Level 1 Stats: ', value: `${level1}` },
					{ name: 'Level 2 Stats: ', value: `${level2}` },
					{ name: 'Level 3 Stats: ', value: `${level3}` },
					{ name: 'Level 4 Stats: ', value: `${level4}` },
					{ name: 'Level 5 Stats: ', value: `${level5}` },
					{ name: 'Drops: ', value: `${drops}` },
				);
			message.channel.send(jsonEmbed);
		}
		else {
			message.channel.send('Sorry I couldnt find that Arcane. Did you spell it correctly?');
		}
	},
};