const Items = require('warframe-items');
const Discord = require('discord.js');

module.exports = {
	name: 'search-archmelee',
	aliases: ['sarm'],
	description: 'Search for Archmelees!',
	args: true,
	usage: '<archmelee name>',
	execute(message, args) {
		const argsName = args.join(' ').toLowerCase();
		const archmelee = new Items({ category: ['Arch-Melee'] });
		const searchedArchmelee = archmelee.find(record => record.name.toLowerCase() === argsName);
		if (searchedArchmelee != undefined) {
			const name = searchedArchmelee.name;
			const description = searchedArchmelee.description;
			const totalDamage = searchedArchmelee.totalDamage;
			const damagePerBullet = searchedArchmelee.damage;
			const damagePerShot = searchedArchmelee.damagePerShot;
			const slashDamage = searchedArchmelee.damageTypes.slash;
			const impactDamage = searchedArchmelee.damageTypes.impact;
			const punctureDamage = searchedArchmelee.damageTypes.puncture;
			const comboDuration = searchedArchmelee.comboDuration;
			const range = searchedArchmelee.range;
			const slamAttack = searchedArchmelee.slamAttack;
			const slamRadialDamage = searchedArchmelee.slamRadialDamage;
			const slamRadius = searchedArchmelee.slamRadius;
			const slideAttack = searchedArchmelee.slideAttack;
			const heavyAttackDamage = searchedArchmelee.heavyAttackDamage;
			const heavySlamAttackDamage = searchedArchmelee.heavySlamAttack;
			const rivenDsiposition = searchedArchmelee.disposition;
			const critChance = searchedArchmelee.criticalChance;
			const procChance = searchedArchmelee.procChance;
			const fireRate = searchedArchmelee.fireRate;
			const masteryRequirement = searchedArchmelee.masteryReq;
			const components = searchedArchmelee.components;
			let polarities = searchedArchmelee.polarities;
			if (polarities == '') {
				polarities = 'None';
			}
			const wikiaThumbnail = searchedArchmelee.wikiaThumbnail;
			const wikiaUrl = searchedArchmelee.wikiaUrl;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Archgun Information for ${name}`)
				.setDescription(`${description}`)
				.setURL(`${wikiaUrl}`)
				.setImage(`${wikiaThumbnail}`)
				.addFields(
					{ name: 'Total Damage', value: `${totalDamage}`, inline: true },
					{ name: 'Damage Per Shot', value: `${damagePerShot}`, inline: true },
					{ name: 'Damage Per Bullet', value: `${damagePerBullet}`, inline: true },
					{ name: 'Slash Damage', value: `${slashDamage}`, inline: true },
					{ name: 'Impact Damage', value: `${impactDamage}`, inline: true },
					{ name: 'Puncture Damage', value: `${punctureDamage}`, inline: true },
					{ name: 'Combo Duration', value: `${comboDuration}`, inline: true },
					{ name: 'Range', value: `${range}`, inline: true },
					{ name: 'Slam Attack', value: `${slamAttack}`, inline: true },
					{ name: 'Slam Radial Damage', value: `${slamRadialDamage}`, inline: true },
					{ name: 'Slam Radius', value: `${slamRadius}`, inline: true },
					{ name: 'Slide Attack', value: `${slideAttack}`, inline: true },
					{ name: 'Heavy Attack Damage', value: `${heavyAttackDamage}`, inline: true },
					{ name: 'Heavy Slam Attack Damage', value: `${heavySlamAttackDamage}`, inline: true },
					{ name: 'Fire Rate', value: `${fireRate}`, inline: true },
					{ name: 'Crit Chance', value: `${critChance}`, inline: true },
					{ name: 'Proc Chance', value: `${procChance}`, inline: true },
					{ name: 'Riven Dsiposition', value: `${rivenDsiposition}`, inline: true },
					{ name: 'Polarities', value: `${polarities}`, inline: true },
					{ name: 'Mastery Requirement', value: `${masteryRequirement}`, inline: true },
					{ name: 'Components', value: `${components[0].itemCount} ${components[0].name}:\n ${components[0].description}\n\n${components[1].itemCount} ${components[1].name}:\n ${components[1].description}\n\n${components[2].itemCount} ${components[2].name}:\n ${components[2].description}\n\n${components[3].itemCount} ${components[3].name}:\n ${components[3].description}` },
				);
			message.channel.send(jsonEmbed);
		}
		else {
			message.channel.send('Sorry I couldnt find that Archmelee. Did you spell it correctly?');
		}
	},
};