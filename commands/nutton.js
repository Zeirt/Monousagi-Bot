const config = require('../config.js');
exports.run = (client, message, params) => {
  message.channel.send(config.nutton);
  console.log(message.createdTimestamp + "|" + "!nutton by " + message.author.username);
  return;
}
