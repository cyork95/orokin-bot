const unirest = require('unirest');
const Discord = require('discord.js');

module.exports = {
	name: 'reward',
	aliases: ['mission-reward', 'rewards'],
	description: 'Get the drop reward details for a particular mission not tied to a location.',
	args: true,
	usage: '<mission_name (Derelict Vault, Kuva Flood, Kuva Siphon, Fomorian Sabotage, Razorback, Arbitrations, Granum Void, Extended Granum Void, Nightmare Granum Void, Nightmare Mode Rewards, Phorid Assassination, Hallowed Flame Mission Caches, Hallowed Flame Endurance Caches)>',
	execute(message, args) {
		let mission_name = args[0].charAt(0).toUpperCase() + args[0].slice(1);
		let mission_index = 0;
		if (args[1]) {
			const mission_name_1 = args[1].charAt(0).toUpperCase() + args[1].slice(1);
			mission_name = mission_name + ' ' + mission_name_1;
		}
		if (args[2]) {
			const mission_name_2 = args[2].charAt(0).toUpperCase() + args[2].slice(1);
			mission_name = mission_name + ' ' + mission_name_2;
		}
		if (args[3]) {
			const mission_name_3 = args[3].charAt(0).toUpperCase() + args[3].slice(1);
			mission_name = mission_name + ' ' + mission_name_3;
		}
		if (mission_name == 'Derelict Vault') {
			mission_index = 1;
		}
		else if (mission_name == 'Phorid Assassination') {
			mission_index = 2;
		}
		else if (mission_name == 'Nightmare Mode Rewards') {
			mission_index = 3;
		}
		else if (mission_name == 'Fomorian Sabotage') {
			mission_index = 4;
		}
		else if (mission_name == 'Razorback') {
			mission_index = 5;
		}
		else if (mission_name == 'Kuva Siphon') {
			mission_index = 6;
		}
		else if (mission_name == 'Kuva Flood') {
			mission_index = 7;
		}
		else if (mission_name == 'Hallowed Flame Mission Caches') {
			mission_index = 8;
		}
		else if (mission_name == 'Hallowed Flame Endurance Caches') {
			mission_index = 9;
		}
		else if (mission_name == 'Granum Void') {
			mission_index = 10;
		}
		else if (mission_name == 'Extended Granum Void') {
			mission_index = 11;
		}
		else if (mission_name == 'Nightmare Granum Void') {
			mission_index = 11;
		}
		else {
			message.channel.send('I can\'t find that mission type! You can search for [Derelict Vault, Kuva Flood, Kuva Siphon, Fomorian Sabotage, Razorback, Arbitrations, Granum Void, Extended Granum Void, Nightmare Granum Void, Nightmare Mode Rewards, Phorid Assassination, Hallowed Flame Mission Caches, Hallowed Flame Endurance Caches]');
		}
		const req = unirest('GET', 'http://drops.warframestat.us/data/transientRewards.json');
		req.end(function(res) {
			if (res.error) {
				message.channel.send('I can\'t currently connect. Try again later!');
				return;
			}
			const jsonResponse = res.body;
			let rotations = true;
			console.log(jsonResponse['transientRewards'][mission_index]);
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Reward Drops for ${mission_name}`);
			if(`${mission_name}` == 'Arbitrations') {
				jsonEmbed.addField('The rotation order is: ', 'Rotation A: Rounds 1, 2 ... | Rotation B: Rounds 3,4... | Rotation C:  Rounds 5,6...');
			}
			else if (`${mission_name}` == 'Nightmare Mode Rewards') {
				jsonEmbed.addField('The rotation order is: ', 'Same as mission rotation.');
			}
			else if (`${mission_name}` == 'Granum Void' || `${mission_name}` == 'Extended Granum Void' || `${mission_name}` == 'Nightmare Granum Void') {
				jsonEmbed.addField('The rotation order is: ', 'Rotation A: 25 kills +25 for each participent. | Rotation B: 50 kills +25 for each participent. | Rotation C:  25 kills +25 for each participent.');
			}
			else {
				jsonEmbed.addField('The rotation order is: ', 'No Rotations for this mission type!');
				rotations = false;
			}
			if(rotations) {
				jsonResponse['transientRewards'][`${mission_index}`]['rewards'].forEach(reward => {
					jsonEmbed.addField(`${reward['itemName']}`, `Rotation ${reward['rotation']} ${reward['rarity']} drop with a chance of ${reward['chance']}%`, true);
				});
				message.channel.send(jsonEmbed);
			}
			else {
				jsonResponse['transientRewards'][`${mission_index}`]['rewards'].forEach(reward => {
					jsonEmbed.addField(`${reward['itemName']}`, `${reward['rarity']} drop with a chance of ${reward['chance']}%`, true);
				});
				message.channel.send(jsonEmbed);
			}

		});
	},
};