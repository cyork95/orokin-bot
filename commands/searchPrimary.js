const Items = require('warframe-items');
const Discord = require('discord.js');

module.exports = {
	name: 'search-primary',
	aliases: ['spri'],
	description: 'Search for Primaries!',
	args: true,
	usage: '<primary name>',
	execute(message, args) {
		const argsName = args.join(' ').toLowerCase();
		const primary = new Items({ category: ['Primary'] });
		const searchedPrimary = primary.find(record => record.name.toLowerCase() === argsName);
		if (searchedPrimary != undefined) {
			const name = searchedPrimary.name;
			const type = searchedPrimary.type;
			const ammo = searchedPrimary.ammo;
			const description = searchedPrimary.description;
			const totalDamage = searchedPrimary.totalDamage;
			const damagePerBullet = searchedPrimary.damage;
			const rivenDsiposition = searchedPrimary.disposition;
			const critChance = searchedPrimary.criticalChance;
			const procChance = searchedPrimary.procChance;
			const fireRate = searchedPrimary.fireRate;
			const damagePerShot = searchedPrimary.damagePerShot;
			const accuracy = searchedPrimary.accuracy;
			const trigger = searchedPrimary.trigger;
			const magezineSize = searchedPrimary.magezineSize;
			const reloadTime = searchedPrimary.reloadTime;
			const multishot = searchedPrimary.multishot;
			const componentArray = [];
			for (let i = 0; i < searchedPrimary.components.length; i++) {
				let componentInfo = '';
				if (searchedPrimary.components[i].name == 'Forma') {
					componentInfo = `\n${searchedPrimary.components[i].name}\n This shape-altering component is fundamental to Orokin construction.`;
				}
				else {
					componentInfo = `\n${searchedPrimary.components[i].name}\n ${searchedPrimary.components[i].description}`;
				}

				if (searchedPrimary.components[i].drops != undefined) {
					componentInfo = componentInfo + ' Found from : ' + `${searchedPrimary.components[i].drops[0].location} w/ a chance of ${searchedPrimary.components[i].drops[0].chance}`;
				}
				componentArray.push(componentInfo);
			}
			let polarities = searchedPrimary.polarities;
			if (polarities == '') {
				polarities = 'None';
			}
			const wikiaThumbnail = searchedPrimary.wikiaThumbnail;
			const wikiaUrl = searchedPrimary.wikiaUrl;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Primary Information for ${name} ${type}`)
				.setDescription(`${description}`)
				.setURL(`${wikiaUrl}`)
				.setImage(`${wikiaThumbnail}`)
				.addFields(
					{ name: 'Ammo', value: `${ammo}`, inline: true },
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
					{ name: 'Components', value: `${componentArray}` },
				);
			message.channel.send(jsonEmbed);
		}
		else {
			message.channel.send('Sorry I couldnt find that Archgun. Did you spell it correctly?');
		}
	},
};