const Items = require('warframe-items');
const Discord = require('discord.js');

module.exports = {
	name: 'search-warframe',
	aliases: ['swar'],
	description: 'Search for Warframes!',
	args: true,
	usage: '<warframe name>',
	execute(message, args) {
		const argsName = args.join(' ').toLowerCase();
		const warframes = new Items({ category: ['Warframes'] });
		const searchedWarframe = warframes.find(record => record.name.toLowerCase() === argsName);
		if (searchedWarframe != undefined) {
			const name = searchedWarframe.name;
			const description = searchedWarframe.description;
			const health = searchedWarframe.health;
			const shield = searchedWarframe.shield;
			const armor = searchedWarframe.armor;
			const stamina = searchedWarframe.stamina;
			const power = searchedWarframe.power;
			const sprintSpeed = searchedWarframe.sprintSpeed;
			const sprint = searchedWarframe.sprint;
			const passiveDescription = searchedWarframe.passiveDescription;
			const abilities = searchedWarframe.abilities;
			const componentArray = [];
			for (let i = 0; i < searchedWarframe.components.length; i++) {
				let componentInfo = `\n${searchedWarframe.components[i].name}\n ${searchedWarframe.components[i].description}`;
				if (searchedWarframe.components[i].drops != undefined) {
					componentInfo = componentInfo + ' Can be found from : ' + `${searchedWarframe.components[i].drops[0].location} with a chance of ${searchedWarframe.components[i].drops[0].chance}`;
				}
				componentArray.push(componentInfo);
			}
			const wikiaThumbnail = searchedWarframe.wikiaThumbnail;
			const wikiaUrl = searchedWarframe.wikiaUrl;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Warframe Information for ${name}`)
				.setDescription(`${description}`)
				.setURL(`${wikiaUrl}`)
				.setImage(`${wikiaThumbnail}`)
				.addFields(
					{ name: 'Health', value: `${health}`, inline: true },
					{ name: 'Shield', value: `${shield}`, inline: true },
					{ name: 'Armor', value: `${armor}`, inline: true },
					{ name: 'Stamina', value: `${stamina}`, inline: true },
					{ name: 'Power', value: `${power}`, inline: true },
					{ name: 'Sprint Speed', value: `${sprintSpeed}`, inline: true },
					{ name: 'Sprint', value: `${sprint}`, inline: true },
					{ name: 'Passive Ability: ', value: `${passiveDescription}` },
					{ name: 'Abilities', value: `${abilities[0].name}:\n ${abilities[0].description}\n\n${abilities[1].name}:\n ${abilities[1].description}\n\n${abilities[2].name}:\n ${abilities[2].description}\n\n${abilities[3].name}:\n ${abilities[3].description}\n` },
					{ name: 'Components', value: `${componentArray}` },
				);
			message.channel.send(jsonEmbed);
		}
		else {
			message.channel.send('Sorry I couldnt find that Warframe. Did you spell it correctly?');
		}
	},
};