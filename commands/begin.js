const fs = require("fs");
const config = require('../config.js');
var status = require('../util/status');
var users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

exports.run = (client, message, params) => {
  if((message.member.highestRole.name==config.adminRole)||(message.member.highestRole.name==config.modRole)){
      console.log(message.createdTimestamp + "|" + "m!begin by " + message.author.username);
      const workingChannel = client.channels.find("name", config.whitelistedChannel);
      workingChannel.send(config.begin);
      status.begin = true;
      //Save begin in case it disconnects
      users["begin"] = {begin: 1};
      users["sunyul"] = {s: 0};
      users["trap"] = {s: 0};
      users ["door"] = {s: 0};
      fs.writeFile('./users.json',JSON.stringify(users),console.error);
      client.user.setGame("Investigation Underway!");
      console.log("Starting an investigation.");
      console.log(status.events.event1, status.events.event2, status.events.event3);
  }
  return;
}
