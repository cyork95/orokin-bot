const Items = require('warframe-items');
const Discord = require('discord.js');

module.exports = {
	name: 'search-gear',
	aliases: ['gear'],
	description: 'Search for Gear Info!',
	args: true,
	usage: '<gear name>',
	execute(message, args) {
		const argsName = args.join(' ').toLowerCase();
		const gear = new Items({ category: ['Gear'] });
		const searchedGear = gear.find(record => record.name.toLowerCase() === argsName);
		if (searchedGear != undefined) {
			const name = searchedGear.name;
			const description = searchedGear.description;
			const price = searchedGear.buildPrice;
			const componentArray = [];
			for (let i = 0; i < searchedGear.components.length; i++) {
				let componentInfo = `\n${searchedGear.components[i].name}\n ${searchedGear.components[i].description}`;
				if (searchedGear.components[i].drops != undefined) {
					componentInfo = componentInfo + ' Can be found from : ' + `${searchedGear.components[i].drops[0].location} with a chance of ${searchedGear.components[i].drops[0].chance}`;
				}
				componentArray.push(componentInfo);
			}
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Gear Information for ${name}`)
				.setDescription(`${description}`)
				.addFields(
					{ name: 'Price', value: `${price}`, inline: true },
					{ name: 'Components', value: `${componentArray}`, inline: false },
				);
			message.channel.send(jsonEmbed);
		}
		else {
			message.channel.send('Sorry I couldnt find that Gear. Did you spell it correctly?');
		}
	},
};