const config = require('../config.js');
exports.run = (client, message, params) => {
  if(typeof params[0] == 'undefined'){
      message.channel.send(config.ballError);
      return;
  }
  else{
      //Choose randomized answer.
      console.log(message.createdTimestamp + "|" + "!8ball by " + message.author.username);
      var randomNum = Math.floor(Math.random()*config.ball.length);
      message.channel.send(":8ball: | " + config.ball[randomNum]);
      return;
  }
}
