const Items = require('warframe-items');
const Discord = require('discord.js');

module.exports = {
	name: 'search-archwing',
	description: 'Search for Archwings!',
	args: true,
	usage: '<archwing name>',
	execute(message, args) {
		const argsName = args.join(' ').toLowerCase();
		const archwing = new Items('Warframe');
		const searchedArchwing = archwing.find(record => record.name.toLowerCase() === argsName);
		if (searchedArchwing != undefined) {
			if (args[1] === 'prime' || args[1] === 'Prime') {
				const name = searchedArchwing.name;
				const description = searchedArchwing.description;
				const health = searchedArchwing.health;
				const shield = searchedArchwing.shield;
				const armor = searchedArchwing.armor;
				const stamina = searchedArchwing.stamina;
				const power = searchedArchwing.power;
				const sprintSpeed = searchedArchwing.sprintSpeed;
				const masteryReq = searchedArchwing.masteryReq;
				const abilities = searchedArchwing.abilities;
				// const components = searchedArchwing.components;
				// let drops = '';
				// components.forEach(component => {
				//	drops += `${component.name}: \n`;
				//	component.drops.forEach(drop => {
				//		drops += `${drop.location},\n`;
				//	});
				// });
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Warframe Information for ${name}`)
					.setDescription(`${description}`)
					.addFields(
						{ name: 'Health', value: `${health}`, inline: true },
						{ name: 'Shield', value: `${shield}`, inline: true },
						{ name: 'Armor', value: `${armor}`, inline: true },
						{ name: 'Stamina', value: `${stamina}`, inline: true },
						{ name: 'Power', value: `${power}`, inline: true },
						{ name: 'Sprint Speed', value: `${sprintSpeed}`, inline: true },
						{ name: 'Mastery Requirement', value: `${masteryReq}`, inline: true },
						{ name: 'Abilities', value: `${abilities[0].name}:\n ${abilities[0].description}\n\n${abilities[1].name}:\n ${abilities[1].description}\n\n${abilities[2].name}:\n ${abilities[2].description}\n\n${abilities[3].name}:\n ${abilities[3].description}\n` },
					);
				message.channel.send(jsonEmbed);
				// message.channel.send(drops, { split: true });
			}
			else {
				const name = searchedArchwing.name;
				const description = searchedArchwing.description;
				const health = searchedArchwing.health;
				const shield = searchedArchwing.shield;
				const armor = searchedArchwing.armor;
				const stamina = searchedArchwing.stamina;
				const power = searchedArchwing.power;
				const sprintSpeed = searchedArchwing.sprintSpeed;
				const masteryReq = searchedArchwing.masteryReq;
				const abilities = searchedArchwing.abilities;
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Warframe Information for ${name}`)
					.setDescription(`${description}`)
					.addFields(
						{ name: 'Health', value: `${health}`, inline: true },
						{ name: 'Shield', value: `${shield}`, inline: true },
						{ name: 'Armor', value: `${armor}`, inline: true },
						{ name: 'Stamina', value: `${stamina}`, inline: true },
						{ name: 'Power', value: `${power}`, inline: true },
						{ name: 'Sprint Speed', value: `${sprintSpeed}`, inline: true },
						{ name: 'Mastery Requirement', value: `${masteryReq}`, inline: true },
						{ name: 'Abilities', value: `${abilities[0].name}:\n ${abilities[0].description}\n\n${abilities[1].name}:\n ${abilities[1].description}\n\n${abilities[2].name}:\n ${abilities[2].description}\n\n${abilities[3].name}:\n ${abilities[3].description}\n` },
					);
				message.channel.send(jsonEmbed);
			}
		}
		else {
			message.channel.send('Sorry I couldnt find that Warframe. Did you spell it correctly?');
		}
	},
};