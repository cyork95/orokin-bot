const unirest = require('unirest');
const Discord = require('discord.js');

module.exports = {
	name: 'drops',
	aliases: ['drop-info', 'drop'],
	description: 'Get the drop reward details for a particular mission.',
	args: true,
	usage: '<planet_name (sedna, mars, etc)> <node_name (xini, cassini, ect.)>',
	execute(message, args) {
		const planet_name = args[0].charAt(0).toUpperCase() + args[0].slice(1);
		const node_name = args[1].charAt(0).toUpperCase() + args[1].slice(1);
		const req = unirest('GET', ` http://drops.warframestat.us/data/missionRewards/${planet_name}/${node_name}.json`);
		req.end(function(res) {
			if (res.error) {
				message.channel.send('I can\'t find that node. You sure it exists?');
				return;
			}
			const jsonResponse = res.body;
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Reward Drops for ${node_name},${planet_name} ${jsonResponse['gameMode']} Node`);
			if(`${jsonResponse['gameMode']}` == 'Interception' || `${jsonResponse['gameMode']}` == 'Excavation' || `${jsonResponse['gameMode']}` == 'Infested Salvage') {
				jsonEmbed.addField('The rotation order is: ', 'Rotation A: Rounds 1, 2, 5, 6... | Rotation B: Rounds 3,7... | Rotation C:  Rounds 4,8...');
			}
			else if (`${jsonResponse['gameMode']}` == 'Defense' || `${jsonResponse['gameMode']}` == 'Survival') {
				jsonEmbed.addField('The rotation order is: ', 'Rotation A: Rounds 5, 10, 25, 30... | Rotation B: Rounds 15,35... | Rotation C:  Rounds 20,40...');
			}
			else if (`${jsonResponse['gameMode']}` == 'Defection' || `${jsonResponse['gameMode']}` == 'Sanctuary Onslaught') {
				jsonEmbed.addField('The rotation order is: ', 'Rotation A: Sqauds/Zones 2, 4, 10, 12... | Rotation B: Sqauds/Zones 6,14... | Rotation C:  Sqauds/Zones 8,16...');
			}
			else {
				jsonEmbed.addField('The rotation order is: ', 'No Rotations for this mission type!');
			}
			jsonEmbed.addField('Rotation A', 'The Rotation A Rewards are:');
			jsonResponse['rewards']['A'].forEach(reward => {
				jsonEmbed.addField(`${reward['itemName']}`, `${reward['rarity']} drop with a chance of ${reward['chance']}%`, true);
			});
			jsonEmbed.addField('Rotation B', 'The Rotation B Rewards are:');
			jsonResponse['rewards']['B'].forEach(reward => {
				jsonEmbed.addField(`${reward['itemName']}`, `${reward['rarity']} drop with a chance of ${reward['chance']}%`, true);
			});
			jsonEmbed.addField('Rotation C', 'The Rotation C Rewards are:');
			jsonResponse['rewards']['C'].forEach(reward => {
				jsonEmbed.addField(`${reward['itemName']}`, `${reward['rarity']} drop with a chance of ${reward['chance']}%`, true);
			});
			message.channel.send(jsonEmbed);
		});
	},
};