const config = require('../config.js');
exports.run = (client, message, params) => {
  message.channel.send(config.sendRoster);
  message.author.send(config.rosterFile0);
  return;
}
