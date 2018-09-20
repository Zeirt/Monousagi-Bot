const config = require('../config.js');
exports.run = (client, message, params) => {
  console.log(message.createdTimestamp + "|" + "!help by " + message.author.username);
  message.channel.send(config.sendHelp);
  message.author.send(config.helpFile);
  return;
}
