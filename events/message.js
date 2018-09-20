const config = require ('../config.js');
var recentTimes = [];
var hasSentWarning = false;

module.exports = message => {
  let client = message.client;
  //exit if it's a system message
  if(message.system) return;
  //exit if the author is a bot
  if(message.author.bot) return;

  //Check if message mentions you alone (not everyone). In that case, alert admin
  if(message.isMemberMentioned(client.user)&&(!message.mentions.everyone)){
    let adminRoleObject = message.guild.roles.find('name', 'Mastermind');
    const channel = client.channels.find("name", "bot-cooking-channel");
    channel.send(adminRoleObject + " You have a message from " + message.author + " Content:");
    channel.send(message.content);
  }

  if(!message.content.startsWith(config.prefix)) return; //No prefix, get out

  //First, make the message lowercase (no case sensitive)
  input = message.content.toLowerCase();

  //Monousagi was called with a real command or not, but was called

  //COOLDOWN SYSTEM
  //Check if we have to empty the limiter (a minute has passed)
  if (((message.createdTimestamp - recentTimes[recentTimes.length-1])>=(config.cooldownTime*1000))){
      recentTimes.length = 0;
      hasSentWarning = false;
      console.log('Emptying recent commands array.');
  } else console.log('Time left: ' + (message.createdTimestamp - recentTimes[recentTimes.length-1]));

  //Add message's timestamp to array. Check if it's on limit
  if(recentTimes.length==0){
      recentTimes[0] = message.createdTimestamp;
      console.log('Entering first message to array.');
  } else {
      if(recentTimes.length==(config.commandLimit-1)) {
          if(!hasSentWarning){
              message.channel.send(config.tooMuch);
              hasSentWarning = true;
          }
          return;
      }
  recentTimes[recentTimes.length] = message.createdTimestamp;
  console.log('Entering message ' + (recentTimes.length-1) + ' to array.');
  }

  //NOW call the commands
	const args = input.split(' ');
	const command = args.shift().slice(config.prefix.length);

  try {
		let cmdFile = require(`../commands/${command}`);
		cmdFile.run(client, message, args);
	} catch (err) {
		console.log(`Command ${command} failed\n${err.stack}`);
	}
}
