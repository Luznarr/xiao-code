/*const fs = require('node:fs');
const { Client, Collection , Intents, Formatters, Permissions } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: 32767 });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});



for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on('interactionCreate', interaction => {
	if (!interaction.isCommand()) return;
	if (!interaction.channel.permissionsFor(client.user).has(Permissions.FLAGS.SEND_MESSAGES)) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
	}
});

client.login(token);
*/

const Discord  = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client({ intents: 32767 })
const fs = require('fs');
const mongoose = require('mongoose')
const { MONGO_URI } = require('./config.json') 
const testSchema = require('./test-schema')
const WOKCommands = require('wokcommands')
const path = require('path');


client.events = new Discord.Collection();

/*
['event_handler'].forEach(handler =>{
	require(`./handlers/${handler}`)(client, Discord);
})*/

client.on('ready', async () => {
	console.log('YGGDRASIL is online')
	await mongoose.connect(
		MONGO_URI || '',
		{
			keepAlive: true
		}
	)

	await new testSchema({
		message:"hello world"
	}).save()

	new WOKCommands(client, {
	  commandsDir: path.join(__dirname, 'commands'),
	})
  })
/*var defaultLevelingRole = {
	lvl1 :952334123517743145
} 
var demonLevelingRole = {
	lvl1 :952334203930955826
} 
var humanLevelingRole = {
	lvl1 :952347265706651728
} 
var elfLevelingRole = {
	lvl1 :952347140431167498
} */

const defaultLevel= ["945776164662816778" , "945773229086228511" , "945776310955966534" , "945776625767825458" , "945776817980207134" , "945776987702722582" , "945777211896627201"]
const humanLevel= ["945781103300595752" , "945781317654687815" , "945782153726267433" , "945781804776964126" , "945781444272332851" , "945782652034752553" , "945782391006457926"]
const elfLevel= ["945783095670497300" , "945783318719365222" , "945783329045774336" , "945783799038480404" , "945783926293667930" , "945784162776940564" , "945784266355253358"]

 client.on('guildMemberUpdate', (oldMember, newMember) => {
		
	const addedRoles1 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945776164662816778"));
	const member = newMember.guild.members.cache.get(oldMember.id)
	if (addedRoles1.size > 0 , newMember.roles.cache.has("943965215278637075") )  { //for human	
		 member.roles.remove("945776164662816778");
		member.roles.add("945781103300595752");
		return;
	}else if (addedRoles1.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945776164662816778")
		member.roles.add("945783095670497300");
		return;
	} 
	const addedRoles2 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945773229086228511"));
	if (addedRoles2.size > 0 , newMember.roles.cache.has("943965215278637075")) { //for human	
		member.roles.remove("945773229086228511")
		member.roles.add("945781317654687815");
		return;
	}else if (addedRoles2.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945773229086228511")
		member.roles.add("945783318719365222");
		return;
	} 
	const addedRoles3 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945776310955966534"));
	if (addedRoles3.size > 0 , newMember.roles.cache.has("943965215278637075")) { //for human	
		member.roles.remove("945776310955966534")
		member.roles.add("945782153726267433");
		return;
	}else if (addedRoles3.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945776310955966534")
		member.roles.add("945783329045774336");
		return;
	} 
	const addedRoles4 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945776625767825458"));
	if (addedRoles4.size > 0 , newMember.roles.cache.has("943965215278637075")) { //for human	
		member.roles.remove("945776625767825458")
		member.roles.add("945781804776964126");
		return;
	}else if (addedRoles4.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945776625767825458")
		member.roles.add("945783799038480404");
		return;
	} 
	const addedRoles5 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945776817980207134"));
	if (addedRoles5.size > 0 , newMember.roles.cache.has("943965215278637075")) { //for human	
		member.roles.remove("945776817980207134")
		member.roles.add("945781444272332851");
		return;
	}else if (addedRoles5.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945776817980207134")
		member.roles.add("945783926293667930");
		return;
	} 
	const addedRoles6 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945776987702722582"));
	if (addedRoles6.size > 0 , newMember.roles.cache.has("943965215278637075")) { //for human	
		member.roles.remove("945776987702722582")
		member.roles.add("945782652034752553");
		return;
	}else if (addedRoles6.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945776987702722582")
		member.roles.add("945784162776940564");
		return;
	} 
	const addedRoles7 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945777211896627201"));
	if (addedRoles7.size > 0 , newMember.roles.cache.has("943965215278637075")) { //for human	
		member.roles.remove("945777211896627201")
		member.roles.add("945782391006457926");
		return;
	}else if (addedRoles7.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945777211896627201")
		member.roles.add("945784266355253358")
		return;;
	} 
}); 
/*
client.on('guildMemberUpdate', (oldMember, newMember) => {
	const addedRoles2 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945773229086228511"));
	const member = newMember.guild.members.cache.get(oldMember.id)
	if (addedRoles2.size > 0 , newMember.roles.cache.has("943965215278637075")) { //for human	
		member.roles.remove("945773229086228511")
		member.roles.add("945781317654687815")
		;
	}else if (addedRoles2.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945773229086228511")
		member.roles.add("945783318719365222")
		;
	} 
}); 

client.on('guildMemberUpdate', (oldMember, newMember) => {
	const addedRoles3 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945776310955966534"));
	const member = newMember.guild.members.cache.get(oldMember.id)
	if (addedRoles3.size > 0 , newMember.roles.cache.has("943965215278637075")) { //for human	
		member.roles.remove("945776310955966534")
		member.roles.add("945782153726267433")
		;
	}else if (addedRoles3.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945776310955966534")
		member.roles.add("945783329045774336")
		;
	} 
}); 

client.on('guildMemberUpdate', (oldMember, newMember) => {
	const addedRoles4 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945776625767825458"));
	const member = newMember.guild.members.cache.get(oldMember.id)
	if (addedRoles4.size > 0 , newMember.roles.cache.has("943965215278637075")) { //for human	
		member.roles.remove("945776625767825458")
		member.roles.add("945781804776964126")
		;
	}else if (addedRoles4.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945776625767825458")
		member.roles.add("945783799038480404")
		;
	} 
}); 

client.on('guildMemberUpdate', (oldMember, newMember) => {
	const addedRoles5 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945776817980207134"));
	const member = newMember.guild.members.cache.get(oldMember.id)
	if (addedRoles5.size > 0 , newMember.roles.cache.has("943965215278637075")) { //for human	
		member.roles.remove("945776817980207134")
		member.roles.add("945781444272332851")
		;
	}else if (addedRoles5.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945776817980207134")
		member.roles.add("945783926293667930")
		;
	} 
}); 

client.on('guildMemberUpdate', (oldMember, newMember) => {
	const addedRoles6 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945776987702722582"));
	const member = newMember.guild.members.cache.get(oldMember.id)
	if (addedRoles6.size > 0 , newMember.roles.cache.has("943965215278637075")) { //for human	
		member.roles.remove("945776987702722582")
		member.roles.add("945782652034752553")
		;
	}else if (addedRoles6.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945776987702722582")
		member.roles.add("945784162776940564")
		;
	} 
}); 

client.on('guildMemberUpdate', (oldMember, newMember) => {
	const addedRoles7 = newMember.roles.cache.filter(role => !oldMember.roles.cache.has("945777211896627201"));
	const member = newMember.guild.members.cache.get(oldMember.id)
	if (addedRoles7.size > 0 , newMember.roles.cache.has("943965215278637075")) { //for human	
	member.roles.remove("945777211896627201")
	member.roles.add("945782391006457926")
		
		;
	}else if (addedRoles7.size > 0 , newMember.roles.cache.has("943965215278637076")) { //for elf
		member.roles.remove("945777211896627201")
		member.roles.add("945784266355253358")
		;
	} 
}); */




  

/*client.once('ready', async () => {
	await mongoose.connect(
		MONGO_URI || '',
		{
			keepAlive: true
		}
	)

	await new testSchema({
		message:"hello world"
	}).save()
	console.log('YGGDRASIL is online');
}); */

/* client.on('messageCreate' ,  message =>{
	

	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'ping'){
		client.commands.get('ping').execute(message, args);
	} else if(command == 'kai'){
		message.channel.send('is mean!');
		message.channel.send('luna is smart')
	} else if(command == 'purge'){
		client.commands.get('purge').execute(message, args);
	} else if(command == 'ban'){
		client.commands.get('ban').execute(message, args);
	} else if(command == 'kick'){
		client.commands.get('kick').execute(message, args);
	} else if(command == 'help'){
		client.commands.get('help').execute(message, args);
	} else if(command == 'balance'){
		client.commands.get('balance').execute(message, args);
	}
}); */

//client.user.setActivity("hey this is a game!", {type: "PLAYING"});

//console.log(client.application.commands.fetch())


client.login(token);