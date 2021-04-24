const Items = require('warframe-items');
const Discord = require('discord.js');

module.exports = {
	name: 'search-archgun',
	aliases: ['sarg'],
	description: 'Search for Archguns!',
	args: true,
	usage: '<archgun name>',
	execute(message, args) {
		const argsName = args.join(' ').toLowerCase();
		const archgun = new Items({ category: ['Arch-Gun'] });
		const searchedArchgun = archgun.find(record => record.name.toLowerCase() === argsName);
		if (searchedArchgun != undefined) {
			if (args[1] === 'prime' || args[1] === 'Prime') {
				const name = searchedArchgun.name;
				const description = searchedArchgun.description;
				const totalDamage = searchedArchgun.totalDamage;
				const damagePerBullet = searchedArchgun.damage;
				const rivenDsiposition = searchedArchgun.disposition;
				const critChance = searchedArchgun.criticalChance;
				const procChance = searchedArchgun.procChance;
				const fireRate = searchedArchgun.fireRate;
				const damagePerShot = searchedArchgun.damagePerShot;
				const accuracy = searchedArchgun.accuracy;
				const trigger = searchedArchgun.trigger;
				const magezineSize = searchedArchgun.magezineSize;
				const reloadTime = searchedArchgun.reloadTime;
				const multishot = searchedArchgun.multishot;
				const components = searchedArchgun.components;
				const polarities = searchedArchgun.polarities;
				const wikiaThumbnail = searchedArchgun.wikiaThumbnail;
				const wikiaUrl = searchedArchgun.wikiaUrl;
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Archgun Information for ${name}`)
					.setDescription(`${description}`)
					.setURL(`${wikiaUrl}`)
					.setImage(`${wikiaThumbnail}`)
					.addFields(
						{ name: 'Total Damage', value: `${totalDamage}`, inline: true },
						{ name: 'Damage Per Shot', value: `${damagePerShot}`, inline: true },
						{ name: 'Damage Per Bullet', value: `${damagePerBullet}`, inline: true },
						{ name: 'Fire Rate', value: `${fireRate}`, inline: true },
						{ name: 'Crit Chance', value: `${critChance}`, inline: true },
						{ name: 'Proc Chance', value: `${procChance}`, inline: true },
						{ name: 'Accuracy', value: `${accuracy}`, inline: true },
						{ name: 'Magezine Size', value: `${magezineSize}`, inline: true },
						{ name: 'Reload Time', value: `${reloadTime}`, inline: true },
						{ name: 'Multishot', value: `${multishot}`, inline: true },
						{ name: 'Trigger', value: `${trigger}`, inline: true },
						{ name: 'Riven Dsiposition', value: `${rivenDsiposition}`, inline: true },
						{ name: 'Polarities', value: `${polarities}`, inline: true },
						{ name: 'Components', value: `${components[0].itemCount} ${components[0].name}:\n ${components[0].description}\n\n${components[1].itemCount} ${components[1].name}:\n ${components[1].description}\n\n${components[2].itemCount} ${components[2].name}:\n ${components[2].description}\n\n${components[3].itemCount} ${components[3].name}:\n ${components[3].description}` },
					);
				message.channel.send(jsonEmbed);
			}
			else {
				const name = searchedArchgun.name;
				const description = searchedArchgun.description;
				const totalDamage = searchedArchgun.totalDamage;
				const damagePerBullet = searchedArchgun.damage;
				const rivenDsiposition = searchedArchgun.disposition;
				const critChance = searchedArchgun.criticalChance;
				const procChance = searchedArchgun.procChance;
				const fireRate = searchedArchgun.fireRate;
				const damagePerShot = searchedArchgun.damagePerShot;
				const accuracy = searchedArchgun.accuracy;
				const trigger = searchedArchgun.trigger;
				const magezineSize = searchedArchgun.magezineSize;
				const reloadTime = searchedArchgun.reloadTime;
				const multishot = searchedArchgun.multishot;
				const components = searchedArchgun.components;
				const polarities = searchedArchgun.polarities;
				const wikiaThumbnail = searchedArchgun.wikiaThumbnail;
				const wikiaUrl = searchedArchgun.wikiaUrl;
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Archgun Information for ${name}`)
					.setDescription(`${description}`)
					.setURL(`${wikiaUrl}`)
					.setImage(`${wikiaThumbnail}`)
					.addFields(
						{ name: 'Total Damage', value: `${totalDamage}`, inline: true },
						{ name: 'Damage Per Shot', value: `${damagePerShot}`, inline: true },
						{ name: 'Damage Per Bullet', value: `${damagePerBullet}`, inline: true },
						{ name: 'Fire Rate', value: `${fireRate}`, inline: true },
						{ name: 'Crit Chance', value: `${critChance}`, inline: true },
						{ name: 'Proc Chance', value: `${procChance}`, inline: true },
						{ name: 'Accuracy', value: `${accuracy}`, inline: true },
						{ name: 'Magezine Size', value: `${magezineSize}`, inline: true },
						{ name: 'Reload Time', value: `${reloadTime}`, inline: true },
						{ name: 'Multishot', value: `${multishot}`, inline: true },
						{ name: 'Trigger', value: `${trigger}`, inline: true },
						{ name: 'Riven Dsiposition', value: `${rivenDsiposition}`, inline: true },
						{ name: 'Polarities', value: `${polarities}`, inline: true },
						{ name: 'Components', value: `${components[0].itemCount} ${components[0].name}:\n ${components[0].description}\n\n${components[1].itemCount} ${components[1].name}:\n ${components[1].description}\n\n${components[2].itemCount} ${components[2].name}:\n ${components[2].description}\n\n${components[3].itemCount} ${components[3].name}:\n ${components[3].description}` },
					);
				message.channel.send(jsonEmbed);
			}
		}
		else {
			message.channel.send('Sorry I couldnt find that Archgun. Did you spell it correctly?');
		}
	},
};