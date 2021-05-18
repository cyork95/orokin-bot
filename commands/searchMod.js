const Items = require('warframe-items');
const Discord = require('discord.js');

module.exports = {
	name: 'search-mod',
	aliases: ['mod'],
	description: 'Search for Mod Info!',
	args: true,
	usage: '<mod name>',
	execute(message, args) {
		const argsName = args.join(' ').toLowerCase();
		const mod = new Items({ category: ['Mods'] });
		const searchedMod = mod.find(record => record.name.toLowerCase() === argsName);
		if (searchedMod != undefined) {
			const name = searchedMod.name;
			const polarity = searchedMod.polarity;
			const rarity = searchedMod.rarity;
			const baseDrain = searchedMod.baseDrain;
			const fusionLimit = searchedMod.fusionLimit;
			const type = searchedMod.type;
			const wikiaThumbnail = searchedMod.wikiaThumbnail;
			const wikiaUrl = searchedMod.wikiaUrl;
			const dropArray = [];
			if (searchedMod.drops != undefined) {
				for (let i = 0; i < 5; i++) {
					if(searchedMod.drops[i] != undefined) {
						const dropInfo = `\nRecieve from ${searchedMod.drops[i].location} with a chance of ${searchedMod.drops[i].chance}`;
						dropArray.push(dropInfo);
					}
					else{
						continue;
					}
				}
			}
			if (searchedMod.drops != undefined) {
				if (wikiaThumbnail != undefined) {
					if (wikiaUrl != undefined) {
						const jsonEmbed = new Discord.MessageEmbed()
							.setTitle(`Mod Information for ${name}`)
							.setURL(`${wikiaUrl}`)
							.setImage(`${wikiaThumbnail}`)
							.addFields(
								{ name: 'Polarity', value: `${polarity}`, inline: true },
								{ name: 'Rarity', value: `${rarity}`, inline: true },
								{ name: 'Base Cost', value: `${baseDrain}`, inline: true },
								{ name: 'Final Cost', value: `${Number(baseDrain) + Number(fusionLimit)}`, inline: true },
								{ name: 'Upgrade Total', value: `${fusionLimit} Times`, inline: true },
								{ name: 'For', value: `${type}`, inline: true },
								{ name: 'Drops', value: `${dropArray}`, inline: false },
							);
						message.channel.send(jsonEmbed);
					}
					else {
						const jsonEmbed = new Discord.MessageEmbed()
							.setTitle(`Mod Information for ${name}`)
							.setImage(`${wikiaThumbnail}`)
							.addFields(
								{ name: 'Polarity', value: `${polarity}`, inline: true },
								{ name: 'Rarity', value: `${rarity}`, inline: true },
								{ name: 'Base Cost', value: `${baseDrain}`, inline: true },
								{ name: 'Final Cost', value: `${Number(baseDrain) + Number(fusionLimit)}`, inline: true },
								{ name: 'Upgrade Total', value: `${fusionLimit} Times`, inline: true },
								{ name: 'For', value: `${type}`, inline: true },
								{ name: 'Drops', value: `${dropArray}`, inline: false },
							);
						message.channel.send(jsonEmbed);
					}
				}
				else if (wikiaUrl != undefined) {
					const jsonEmbed = new Discord.MessageEmbed()
						.setTitle(`Mod Information for ${name}`)
						.setURL(`${wikiaUrl}`)
						.addFields(
							{ name: 'Polarity', value: `${polarity}`, inline: true },
							{ name: 'Rarity', value: `${rarity}`, inline: true },
							{ name: 'Base Cost', value: `${baseDrain}`, inline: true },
							{ name: 'Final Cost', value: `${Number(baseDrain) + Number(fusionLimit)}`, inline: true },
							{ name: 'Upgrade Total', value: `${fusionLimit} Times`, inline: true },
							{ name: 'For', value: `${type}`, inline: true },
							{ name: 'Drops', value: `${dropArray}`, inline: false },
						);
					message.channel.send(jsonEmbed);
				}
				else {
					const jsonEmbed = new Discord.MessageEmbed()
						.setTitle(`Mod Information for ${name}`)
						.addFields(
							{ name: 'Polarity', value: `${polarity}`, inline: true },
							{ name: 'Rarity', value: `${rarity}`, inline: true },
							{ name: 'Base Cost', value: `${baseDrain}`, inline: true },
							{ name: 'Final Cost', value: `${Number(baseDrain) + Number(fusionLimit)}`, inline: true },
							{ name: 'Upgrade Total', value: `${fusionLimit} Times`, inline: true },
							{ name: 'For', value: `${type}`, inline: true },
							{ name: 'Drops', value: `${dropArray}`, inline: false },
						);
					message.channel.send(jsonEmbed);
				}
			}
			else if (wikiaThumbnail != undefined) {
				if (wikiaUrl != undefined) {
					const jsonEmbed = new Discord.MessageEmbed()
						.setTitle(`Mod Information for ${name}`)
						.setURL(`${wikiaUrl}`)
						.setImage(`${wikiaThumbnail}`)
						.addFields(
							{ name: 'Polarity', value: `${polarity}`, inline: true },
							{ name: 'Rarity', value: `${rarity}`, inline: true },
							{ name: 'Base Cost', value: `${baseDrain}`, inline: true },
							{ name: 'Final Cost', value: `${Number(baseDrain) + Number(fusionLimit)}`, inline: true },
							{ name: 'Upgrade Total', value: `${fusionLimit} Times`, inline: true },
							{ name: 'For', value: `${type}`, inline: true },
						);
					message.channel.send(jsonEmbed);
				}
				else {
					const jsonEmbed = new Discord.MessageEmbed()
						.setTitle(`Mod Information for ${name}`)
						.setImage(`${wikiaThumbnail}`)
						.addFields(
							{ name: 'Polarity', value: `${polarity}`, inline: true },
							{ name: 'Rarity', value: `${rarity}`, inline: true },
							{ name: 'Base Cost', value: `${baseDrain}`, inline: true },
							{ name: 'Final Cost', value: `${Number(baseDrain) + Number(fusionLimit)}`, inline: true },
							{ name: 'Upgrade Total', value: `${fusionLimit} Times`, inline: true },
							{ name: 'For', value: `${type}`, inline: true },
						);
					message.channel.send(jsonEmbed);
				}
			}
			else if (wikiaUrl != undefined) {
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Mod Information for ${name}`)
					.setURL(`${wikiaUrl}`)
					.addFields(
						{ name: 'Polarity', value: `${polarity}`, inline: true },
						{ name: 'Rarity', value: `${rarity}`, inline: true },
						{ name: 'Base Cost', value: `${baseDrain}`, inline: true },
						{ name: 'Final Cost', value: `${Number(baseDrain) + Number(fusionLimit)}`, inline: true },
						{ name: 'Upgrade Total', value: `${fusionLimit} Times`, inline: true },
						{ name: 'For', value: `${type}`, inline: true },
					);
				message.channel.send(jsonEmbed);
			}
			else {
				const jsonEmbed = new Discord.MessageEmbed()
					.setTitle(`Mod Information for ${name}`)
					.addFields(
						{ name: 'Polarity', value: `${polarity}`, inline: true },
						{ name: 'Rarity', value: `${rarity}`, inline: true },
						{ name: 'Base Cost', value: `${baseDrain}`, inline: true },
						{ name: 'Final Cost', value: `${Number(baseDrain) + Number(fusionLimit)}`, inline: true },
						{ name: 'Upgrade Total', value: `${fusionLimit} Times`, inline: true },
						{ name: 'For', value: `${type}`, inline: true },
					);
				message.channel.send(jsonEmbed);
			}
		}
		else {
			message.channel.send('Sorry I couldnt find that Mod. Did you spell it correctly?');
		}
	},
};