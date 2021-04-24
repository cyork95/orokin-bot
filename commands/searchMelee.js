const Items = require('warframe-items');
const Discord = require('discord.js');

module.exports = {
	name: 'search-melee',
	aliases: ['smel'],
	description: 'Search for Melee Weapons!',
	args: true,
	usage: '<melee name>',
	execute(message, args) {
		const argsName = args.join(' ').toLowerCase();
		const melee = new Items({ category: ['Melee'] });
		const searchedMelee = melee.find(record => record.name.toLowerCase() === argsName);
		if (searchedMelee != undefined) {
			const name = searchedMelee.name;
			const description = searchedMelee.description;
			const totalDamage = searchedMelee.totalDamage;
			const damagePerShot = searchedMelee.damagePerShot;
			const slashDamage = searchedMelee.damageTypes.slash;
			const impactDamage = searchedMelee.damageTypes.impact;
			const punctureDamage = searchedMelee.damageTypes.puncture;
			const comboDuration = searchedMelee.comboDuration;
			const followThrough = searchedMelee.followThrough;
			const range = searchedMelee.range;
			const slamAttack = searchedMelee.slamAttack;
			const slamRadialDamage = searchedMelee.slamRadialDamage;
			const slamRadius = searchedMelee.slamRadius;
			const slideAttack = searchedMelee.slideAttack;
			const heavyAttackDamage = searchedMelee.heavyAttackDamage;
			const heavySlamAttackDamage = searchedMelee.heavySlamAttack;
			const heavySlamRadialDamage = searchedMelee.heavySlamRadialDamage;
			const heavySlamRadius = searchedMelee.heavySlamRadius;
			const windUp = searchedMelee.windUp;
			const rivenDsiposition = searchedMelee.disposition;
			const critChance = searchedMelee.criticalChance;
			const criticalMultiplier = searchedMelee.criticalMultiplier;
			const procChance = searchedMelee.procChance;
			const fireRate = searchedMelee.fireRate;
			const masteryRequirement = searchedMelee.masteryReq;
			const componentArray = [];
			for (let i = 0; i < searchedMelee.components.length; i++) {
				let componentInfo = `\n${searchedMelee.components[i].name}\n ${searchedMelee.components[i].description}`;
				if (searchedMelee.components[i].drops != undefined) {
					componentInfo = componentInfo + ' Can be found from : ' + `${searchedMelee.components[i].drops[0].location} with a chance of ${searchedMelee.components[i].drops[0].chance}`;
				}
				componentArray.push(componentInfo);
			}
			let polarities = searchedMelee.polarities;
			if (polarities == '') {
				polarities = 'None';
			}
			const wikiaThumbnail = searchedMelee.wikiaThumbnail;
			const wikiaUrl = searchedMelee.wikiaUrl;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Melee Information for ${name}`)
				.setDescription(`${description}`)
				.setURL(`${wikiaUrl}`)
				.setImage(`${wikiaThumbnail}`)
				.addFields(
					{ name: 'Total Damage', value: `${totalDamage}`, inline: true },
					{ name: 'Damage Per Shot', value: `${damagePerShot}`, inline: true },
					{ name: 'Slash Damage', value: `${slashDamage}`, inline: true },
					{ name: 'Impact Damage', value: `${impactDamage}`, inline: true },
					{ name: 'Puncture Damage', value: `${punctureDamage}`, inline: true },
					{ name: 'Combo Duration', value: `${comboDuration}`, inline: true },
					{ name: 'Follow Through', value: `${followThrough}`, inline: true },
					{ name: 'Range', value: `${range}`, inline: true },
					{ name: 'Slam Attack', value: `${slamAttack}`, inline: true },
					{ name: 'Slam Radial Damage', value: `${slamRadialDamage}`, inline: true },
					{ name: 'Slam Radius', value: `${slamRadius}`, inline: true },
					{ name: 'Slide Attack', value: `${slideAttack}`, inline: true },
					{ name: 'Heavy Attack Damage', value: `${heavyAttackDamage}`, inline: true },
					{ name: 'Heavy Slam Attack Damage', value: `${heavySlamAttackDamage}`, inline: true },
					{ name: 'Heavy Slam Radial Damage', value: `${heavySlamRadialDamage}`, inline: true },
					{ name: 'Heavy Slam Radius', value: `${heavySlamRadius}`, inline: true },
					{ name: 'Wind Up', value: `${windUp}`, inline: true },
					{ name: 'Fire Rate', value: `${fireRate}`, inline: true },
					{ name: 'Crit Chance', value: `${critChance}`, inline: true },
					{ name: 'Critical Multiplier', value: `${criticalMultiplier}`, inline: true },
					{ name: 'Proc Chance', value: `${procChance}`, inline: true },
					{ name: 'Riven Dsiposition', value: `${rivenDsiposition}`, inline: true },
					{ name: 'Polarities', value: `${polarities}`, inline: true },
					{ name: 'Mastery Requirement', value: `${masteryRequirement}`, inline: true },
					{ name: 'Components', value: `${componentArray}` },
				);
			message.channel.send(jsonEmbed);
		}
		else {
			message.channel.send('Sorry I couldnt find that Melee. Did you spell it correctly?');
		}
	},
};