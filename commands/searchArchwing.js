const Items = require('warframe-items');
const Discord = require('discord.js');

module.exports = {
	name: 'search-archwing',
	aliases: ['sarch'],
	description: 'Search for Archwings!',
	args: true,
	usage: '<archwing name>',
	execute(message, args) {
		const argsName = args.join(' ').toLowerCase();
		const archwing = new Items({ category: ['Archwing'] });
		const searchedArchwing = archwing.find(record => record.name.toLowerCase() === argsName);
		if (searchedArchwing != undefined) {
			const name = searchedArchwing.name;
			const description = searchedArchwing.description;
			const health = searchedArchwing.health;
			const shield = searchedArchwing.shield;
			const armor = searchedArchwing.armor;
			const stamina = searchedArchwing.stamina;
			const power = searchedArchwing.power;
			const sprintSpeed = searchedArchwing.sprintSpeed;
			const masteryReq = searchedArchwing.masteryReq;
			const componentArray = [];
			for (let i = 0; i < searchedArchwing.components.length; i++) {
				let componentInfo = `\n${searchedArchwing.components[i].name}\n ${searchedArchwing.components[i].description}`;
				if (searchedArchwing.components[i].drops != undefined) {
					componentInfo = componentInfo + ' Can be found from : ' + `${searchedArchwing.components[i].drops[0].location} with a chance of ${searchedArchwing.components[i].drops[0].chance}`;
				}
				componentArray.push(componentInfo);
			}
			const abilities = searchedArchwing.abilities;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Archwing Information for ${name}`)
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
					{ name: 'Components', value: `${componentArray}` },
				);
			message.channel.send(jsonEmbed);
		}
		else {
			message.channel.send('Sorry I couldnt find that Archwing. Did you spell it correctly?');
		}
	},
};