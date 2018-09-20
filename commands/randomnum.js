const config = require('../config.js');
exports.run = (client, message, params) => {
  var min = parseInt(params[0]);
  var max = parseInt(params[1]);
  console.log(message.createdTimestamp + "|" + "!randomNum by " + message.author.username);
  if((isNaN(min))||(isNaN(max))){
      //Not a number! Abort
      message.channel.send(config.randError);
      return;
  }
  if((min>=max)){
      //Ask the user what the fuck they're doing
      message.channel.send(config.randError);
      return;
  }
  var res = Math.floor(Math.random()*(max-min+1)+min);
  message.channel.send(config.randResult + "**" + res + "**");
  return;
}
