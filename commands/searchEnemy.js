const Items = require('warframe-items');
const Discord = require('discord.js');

module.exports = {
	name: 'search-enemy',
	aliases: ['sen'],
	description: 'Search for Enemies!',
	args: true,
	usage: '<enemy name>',
	execute(message, args) {
		const argsName = args.join(' ').toLowerCase();
		const enemy = new Items({ category: ['Enemy'] });
		const searchedEnemy = enemy.find(record => record.name.toLowerCase() === argsName);
		if (searchedEnemy != undefined) {
			if (searchedEnemy.drops != undefined) {
				const name = searchedEnemy.name;
				const description = searchedEnemy.description;
				const health = searchedEnemy.health;
				const shield = searchedEnemy.shield;
				const armor = searchedEnemy.armor;
				const type = searchedEnemy.type;
				const dropsArray = [];
				for (let i = 0; i < searchedEnemy.drops.length; i++) {
					const dropsInfo = `${searchedEnemy.drops[i].location} ${searchedEnemy.drops[i].chance}%`;
					dropsArray.push(dropsInfo);
				}
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Enemy Information for ${name}`)
					.setDescription(`${description}`)
					.addFields(
						{ name: 'Health', value: `${health}`, inline: true },
						{ name: 'Shield', value: `${shield}`, inline: true },
						{ name: 'Armor', value: `${armor}`, inline: true },
						{ name: 'Type', value: `${type}`, inline: true },
						{ name: 'Drops', value: `${dropsArray}`, inline: false },
					);
				message.channel.send(jsonEmbed);
			}
			else {
				const name = searchedEnemy.name;
				const description = searchedEnemy.description;
				const health = searchedEnemy.health;
				const shield = searchedEnemy.shield;
				const armor = searchedEnemy.armor;
				const type = searchedEnemy.type;
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Enemy Information for ${name}`)
					.setDescription(`${description}`)
					.addFields(
						{ name: 'Health', value: `${health}`, inline: true },
						{ name: 'Shield', value: `${shield}`, inline: true },
						{ name: 'Armor', value: `${armor}`, inline: true },
						{ name: 'Type', value: `${type}`, inline: true },
					);
				message.channel.send(jsonEmbed);
			}
		}
		else {
			message.channel.send('Sorry I couldnt find that Enemy. Did you spell it correctly?');
		}
	},
};