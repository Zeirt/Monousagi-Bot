const config = require('../config.js');
exports.run = (client, message, params) => {
  var diceData = params[0].split("d"); //I want num of dice and dice type (3d20 means d20 3 times)
  times = parseInt(diceData[0]);
  type = parseInt(diceData[1]);
  if(params.length > 1){
    message.channel.send(config.rollError);
    return;
  }
  console.log(message.createdTimestamp + "|" + "!roll by " + message.author.username);
  if((isNaN(times))||(isNaN(type))){
    //Not a number! Abort
    message.channel.send(config.rollError);
    return;
  }
  var res = "Rolling " + params[0] + " | **";
  for(var j = 0; j < times; j++){//roll j times
    roll = Math.floor(Math.random()*(type-1+1)+1);
    res = res + roll;
    if(j+1<times) res = res + ", ";
  }
  res = res + "**\n\n "; 
  message.channel.send(res);
  return;
}