// require nodes file system module
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, WARFRAME_ANNOUNCEMENTS_CHANNEL, platform } = require('./config.json');
const cron = require('cron');
const unirest = require('unirest');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
			return message.reply('You can not do this!');
		}
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

const sendDailySortie = new cron.CronJob('00 30 17 * * *', () => {
	// This runs every day at 11:30:00est,
	const req = unirest('GET', `https://api.warframestat.us/${platform}/sortie`);
	req.end(function(res) {
		if (res.error) throw new Error(res.error);
		const jsonResponse = res.body;
		const jsonEmbed = new Discord.MessageEmbed()
			.setTitle(`Current Daily Sortie for ${platform}`);
		jsonResponse['variants'].forEach(mission => {
			if (mission['missionType'] == 'Assassination') {
				jsonEmbed.addField(`${mission['missionType']} of ${jsonResponse['boss']} on ${mission['node']}`, `Modifier: ${mission['modifierDescription']}`);
			}
			else {
				jsonEmbed.addField(`${mission['missionType']} on ${mission['node']}`, `Modifier: ${mission['modifierDescription']}`);
			}

		});
		client.channels.cache.find(i => i.name === WARFRAME_ANNOUNCEMENTS_CHANNEL).send(jsonEmbed);
	});
});

const sendDailyDarvo = new cron.CronJob('00 30 17 * * *', () => {
	// This runs every day at 11:30:00est,
	const req = unirest('GET', `https://api.warframestat.us/${platform}/dailyDeals`);
	req.end(function(res) {
		if (res.error) throw new Error(res.error);
		const jsonResponse = res.body;
		const jsonEmbed = new Discord.MessageEmbed()
			.setTitle(`Darvo Daily Deal for ${platform}`)
			.setDescription(`The Daily Darvo Deal is ${jsonResponse[0]['item']} for ${jsonResponse[0]['salePrice']}plat originally ${jsonResponse[0]['originalPrice']}plat!`);
		client.channels.cache.find(i => i.name === WARFRAME_ANNOUNCEMENTS_CHANNEL).send(jsonEmbed);
	});
});

const sendWeeklyNightwave = new cron.CronJob('30 15 * * MON', () => {
// This runs every monday at 10:30:00est,
	const req = unirest('GET', `https://api.warframestat.us/${platform}/nightwave`);
	req.end(function(res) {
		if (res.error) throw new Error(res.error);
		const jsonResponse = res.body;
		const jsonEmbed = new Discord.MessageEmbed()
			.setTitle(`Current Nightwave Challenges for ${platform}`);
		jsonResponse['activeChallenges'].forEach(challenge => {
			jsonEmbed.addField(`${challenge['title']}`, `${challenge['desc']}! This is worth ${challenge['reputation']} nightwave reputation!`);
		});
		client.channels.cache.find(i => i.name === WARFRAME_ANNOUNCEMENTS_CHANNEL).send(jsonEmbed);
	});
});

const sendWeeklyNews = new cron.CronJob('00 15 * * MON', () => {
	// This runs every monday at 10:00:00est,
	const req = unirest('GET', `https://api.warframestat.us/${platform}/news`);
	req.end(function(res) {
		if (res.error) throw new Error(res.error);
		const jsonResponse = res.body;
		const jsonEmbed = new Discord.MessageEmbed()
			.setTitle(`Current News for ${platform}`);
		jsonResponse.forEach(news => {
			jsonEmbed.addField(`${news['message']}`, `${news['asString']}`);
		});
		client.channels.cache.find(i => i.name === WARFRAME_ANNOUNCEMENTS_CHANNEL).send(jsonEmbed);
	});
});

const sendWeeklyBarro = new cron.CronJob('00 15 * * FRI', () => {
	// This runs every friday at 10:00:00est,
	const req = unirest('GET', `https://api.warframestat.us/${platform}/voidTrader`);

	req.end(function(res) {
		if (res.error) throw new Error(res.error);
		const jsonResponse = res.body;
		if(jsonResponse['inventory'] == '') {
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Barro Information for ${platform}`)
				.setDescription(`${jsonResponse['character']} will be at ${jsonResponse['location']} in ${jsonResponse['startString']}!`);
				client.channels.cache.find(i => i.name === WARFRAME_ANNOUNCEMENTS_CHANNEL).send(jsonEmbed);
		}
		else {
			const jsonEmbed = new Discord.MessageEmbed()
				.setTitle(`Barro Information for ${platform}`)
				.setDescription(`${jsonResponse['character']} is at ${jsonResponse['location']}`);
			jsonResponse['inventory'].forEach(item => {
				jsonEmbed.addField(item['item'], `Ducat Cost is ${item['ducats']} and Credit Cost is ${item['credits']}`);
			});
			client.channels.cache.find(i => i.name === WARFRAME_ANNOUNCEMENTS_CHANNEL).send(jsonEmbed);
		}
});

sendDailySortie.start();
sendDailyDarvo.start();
sendWeeklyNightwave.start();
sendWeeklyNews.start();
sendWeeklyBarro.start();

// login to Discord with your app's token
client.login(token);
