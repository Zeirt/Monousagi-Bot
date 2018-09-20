const config = require('../config.js');
exports.run = (client, message, params) => {
  var coin = Math.round(Math.random());
  //Either 1 or 0 (random in js is between 0 and 1)
  if (coin==0) message.channel.send(config.coinFlipHeads);
  else message.channel.send(config.coinFlipTails);
  console.log(message.createdTimestamp + "|" + "!coinFlip by " + message.author.username);
  return;
}
