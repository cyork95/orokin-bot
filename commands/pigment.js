const Discord = require('discord.js');

module.exports = {
	name: 'pigment',
	aliases: ['color', 'colour'],
	description: 'Get information on how to farm a color.',
	args: true,
	usage: '<color>',
	execute(message, args) {
		const colorChosen = args.join(' ').toLowerCase();
		const note = 'Remember to check the Tenno Lab in the Dojo to see the current pigment being researched!';
		if (colorChosen === '01000011 cyan' || colorChosen === 'cyan') {
			const enemy = 'Terra Raptor Sx';
			const location = 'can be found in the Temple Fabrication on the Orb Vallis at high levels. Freeing camps from Corpus for Solaris United will spawn multiple Terra Raptor SX during the mini mobile defense mission, a good way to farm the pigment.';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. These ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if(colorChosen === 'anti-violet') {
			const enemy = 'Zanuka Hunter';
			const location = 'The Zanuka Hunter has a 1.5% chance of spawning for marked players on Corpus missions within the first four minutes. Each additional marked player in the squad increases the chances by 0.5%. Upon spawning, one marked player will have their mark removed, much like the Grustrag Three. Running additional invasion missions for the Grineer is also a good way to find the Zanuka Hunter as the chance is doubled after getting the mail for that invasion. To gain the mark, complete a set of invasion missions resulting in battle pay. You should get mail from Alad V thanking you for volunteering for the Zanuka project. You may still have the mark even if you do not get the mail.';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'autumn brown') {
			const enemy = 'Corrupted MOA';
			const location = 'Although common MOAs mutate to Corrupted MOAs in Void Fissures, they are not treated like the actual Corrupted MOAs from within the Void. Thus Autumn Brown Pigment may only be found in Void missions but NOT on Corrupted MOAs in Void Fissures like on Europe. Good missions are: Belenus, Defense (Void) or Mot, Survival (Void)';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'boler red') {
			const enemy = 'Phorid';
			const location = 'any Infestation Outbreaks.';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. He can be found at ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'charger blue') {
			const enemy = 'Toxic Ancient';
			const location = 'any Infestation Mission. Toxic Ancients can be identified by the bright green glow from their heads, as well as their black and green bodies.';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. They can be found at ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'conductor gold') {
			const enemy = 'Terra Embattor MOA';
			const location = 'Enrichment Center area of the Orb Vallis is one place to meet them, especially at high alert levels. As this place is also used for toroid farming, meeting them is a great possibility. "Defend The Comm System" side-missions to switch agents to new areas for the United Solaris will have few MOAs (such as Transit Depot). If the alert level increases during one defense, keeping the level high will help to farm in one place. Farming "Conductor Gold" pigment, each MOA will have a chance to drop the color in 10-packed quantities, and at least one of them will most certainly drop the color.';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. They can be found at ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'coolent blue') {
			const enemy = 'Terra Overtaker';
			const location = 'a Corpus enemy unit encountered in the Orb Vallis on Venus.';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. They can be found as ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'crawler blue') {
			const enemy = 'Crawler';
			const location = 'Crawlers resemble Infested Crewman with no lower limbs, which forces them to move with their hands. Best places to farm are: Tikal Excavation (Earth), Armaros Exterminate (Europa), Isos	Capture (Eris), Brugia	Rescue (Eris) and Gabii	Survival (Ceres).';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'devar grey' || colorChosen === 'devar gray') {
			const enemy = 'Tusk Mortar Bombard';
			const location = 'Plains of Eidolon';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. These can be found in the ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'dust brown') {
			const enemy = 'Corrupted Lancer';
			const location = 'The best places to farm are: Hepit Capture (Void), Ukko Capture (Void), and Ani Survival (Void)';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'elysium blue') {
			const enemy = 'The Sergeant';
			const location = 'He can be found on the mission Iliad, Phobos';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'glacial blue') {
			const enemy = 'Crewman';
			const location = 'They can be farmed on the mission Copernicus Capture (Lua) or Aphrodite Mobile Defense (Venus)';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'hesperia brown') {
			const enemy = 'Trooper';
			const location = 'They can be farmed on the mission Cassini	Capture (Saturn), Numa	Rescue (Saturn), Adaro	Exterminate	(Sedna), or Pantheon Exterminate (Mercury)';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'jackal yellow') {
			const enemy = 'Sniper Crewman';
			const location = 'They can be farmed on the mission Sao	Sabotage (Neptune)';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'leaf red') {
			const enemy = 'Stalker';
			const location = 'Players will be marked by killing certain bosses during Assassination missions and being given a Death Mark. Then the Stalker can spawn in almost any player-accessible mission. Upon being marked for death, the target Tenno will receive an inbox message from the Stalker (marked as ???). After this message is received, the game will calculate the Stalker\'s chance to spawn in a valid mission according to the following formula: Spawn Chance = 1.5% + (0.5% × P); P = Players in Squad marked for death. Thus with squad line-ups of 1 to 4 marked players the chances of spawn are 2%, 2.5%, 3% and 3.5% respectively for each possible combination. Death Marks stack. This means that players can acquire Stalker Death Marks by killing different Bosses. Should the Stalker make his appearance and be slain, the Death Marks do not disappear all at once, meaning players will encounter him again on different missions.';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'leech green') {
			const enemy = 'Corrupted Crewman';
			const location = 'They can be farmed on the mission Hepit Capture (Void) or Teshub Exterminate (Void)';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'memoriam purple') {
			const enemy = 'Terra Provisor';
			const location = 'Freeing camps from Corpus for Solaris United will spawn multiple Terra Provisor during the mini mobile defense mission, a good way to farm the Memoriam Blue Pigment.';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'moa green') {
			const enemy = 'Orokin Drone';
			const location = 'Farm on Corrupted Maps';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'morning yellow') {
			const enemy = 'Leech Osprey';
			const location = 'Farm on Abaddon Capture (Europa)';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'mortus pink') {
			const enemy = 'Tusk Flameblade';
			const location = 'Farm in Plains of Eidolon';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'mutalist red') {
			const enemy = 'Tar Mutalist MOA';
			const location = 'Farm on Gabii	Survival (Ceres)';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'nanite blue') {
			const enemy = 'Charger';
			const location = 'Farm on Tikal	Excavation (Earth), Terminus Sabotage (Mercury), M Prime Exterminate (Mercury), Isos Capture (Eris)';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'neo pink') {
			const enemy = 'Terra Trencher';
			const location = 'Enrichment Labs area of the Orb Vallis is one place to meet them. As this place is also used for toroid farming, meeting them is a great possibility. "Defend The Comm System" side-missions to switch agents to new areas for the United Solaris will have few of them (such as Transit Depot). If the alert level increases during one defense, keeping the level high will help to farm in one place. Farming "Neo Pink" pigment, each Trencher will have a chance to drop the color in 5-packed quantities, and at least one of them will most certainly drop the color.';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'night blue') {
			const enemy = 'Councilor Vay Hek';
			const location = 'Vay Hek is fought on Oro, Earth, which can be accessed only by players of Mastery Rank 5 or higher.';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'oak brown') {
			const enemy = 'Butcher';
			const location = 'You can farm these on Kelpie Disruption (Sedna), Lex Capture (Ceres), Adaro Exterminate (Sedna), Cassini	Capture (Saturn), Mariana	Exterminate	(Earth).';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'olympus blue') {
			const enemy = 'Lancer';
			const location = 'You can farm these on Elion Capture (Mercury), Odin Interception (Mercury), Caloris Rescue (Mercury), Pantheon Exterminate (Mercury), Cassini	Capture (Saturn).';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'river blue') {
			const enemy = 'Seeker';
			const location = 'You can farm them on Lex Capture (Ceres), Nuovo Rescue (Ceres), Kappa	Spy (Sedna), Adaro Exterminate (Sedna).';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'sand yellow') {
			const enemy = 'Scorpion';
			const location = 'You can farm them on Lex Capture (Ceres), Pallas Exterminate (Ceres), Gabii Survival (Ceres), Helene Defense (Saturn), Telesto	Exterminate (Saturn).';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'shard black') {
			const enemy = 'Eidolon Vomvalyst';
			const location = 'You can farm them on Plains of Eidlodon at night.';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'syrtis orange') {
			const enemy = 'Arid Eviscerator';
			const location = 'You can farm them on Augustus	Excavation (Mars).';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'tharsis brown') {
			const enemy = 'Ballista';
			const location = 'You can farm them on Ara Capture (Mars), Draco Survival (Ceres), Mantle Capture (Earth), Lex Capture(Ceres).';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'tower white') {
			const enemy = 'Kuva Jester';
			const location = 'The Kuva Jesters are special enemies that appear together with the Kuva Guardians in the Kuva Siphon sub-mission.';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'tree green') {
			const enemy = 'Arid Lancer';
			const location = 'You can farm them on Spear Defense (Mars).';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else if (colorChosen === 'wisp grey' || colorChosen === 'wisp gray') {
			const enemy = 'Arid Lancer';
			const location = 'You can farm them on Spear Defense (Mars).';
			const jsonEmbed = new Discord.MessageEmbed().setTitle(`Pigment Farming Information for ${colorChosen}`).setDescription(`You need to farm ${enemy}. ${location}`).addField('Note: ', `${note}`);
			message.channel.send(jsonEmbed);
		}
		else {
			return message.channel.send('I can\'t find that color. Check the Tenno Lab to see what color we are working on!');
		}
	},
};