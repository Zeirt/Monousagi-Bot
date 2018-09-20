const fs = require("fs");
const config = require('../config.js');
var status = require('../util/status');
var users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

exports.run = (client, message, params) => {
  if((message.member.highestRole.name==config.adminRole)||(message.member.highestRole.name==config.modRole)){
      console.log(message.createdTimestamp + "|" + "m!end by " + message.author.username);
      status.begin = false;
      status.events.event1 = false;
      status.events.event2 = false;
      status.events.event3 = false;

      //Save file
      users["begin"] = {begin: 0};
      users["sunyul"] = {s: 0};
      users["trap"] = {s: 0};
      users ["door"] = {s: 0};
      fs.writeFile('./users.json',JSON.stringify(users),console.error);
      client.user.setGame("Despair!");
      console.log("Returning to normal duties.");
      message.channel.send("Investigation terminated.");
  }
  return;
}
