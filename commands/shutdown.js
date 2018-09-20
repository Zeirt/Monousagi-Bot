const config = require('../config.js');
exports.run = (client, message, params) => {
  if((message.member.highestRole.name==config.adminRole)||(message.member.highestRole.name==config.modRole)){
      console.log(message.createdTimestamp + "|" + "!shutDown by " + message.author.username);
      console.log("Shutting down");
      process.exit(0);
  }
  return;
}
