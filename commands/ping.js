const config = require('../config.js');
exports.run = (client, message, params) => {
  if((message.member.highestRole.name==config.adminRole)||(message.member.highestRole.name==config.modRole)){
      message.channel.send("pong");
      console.log(message.createdTimestamp + "|" + "!ping by " + message.author.username);
  }
  return;
}
