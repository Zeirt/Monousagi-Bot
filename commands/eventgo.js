const config = require('../config.js');
var status = require('../util/status');
const fs = require("fs");
var users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

exports.run = (client, message, params) => {
  if((message.member.highestRole.name==config.adminRole)||(message.member.highestRole.name==config.modRole)){
    switch(params[0]){
      case "shizu":
            users["sunyul"].s = 1;
            status.events.event1 = true;
            fs.writeFile('./users.json',JSON.stringify(users),console.error);
            message.channel.send("Event has been launched. Shizu's body has been found.");
            break;
      case "kaiser":
            users["trap"].s = 1;
            status.events.event2 = true;
            fs.writeFile('./users.json',JSON.stringify(users),console.error);
            message.channel.send("Event has been launched. Kaiser's body has been found.");
            break;
      case "michi":
            users["door"].s = 1;
            status.events.event3 = true;
            fs.writeFile('./users.json',JSON.stringify(users),console.error);
            message.channel.send("Event has been launched. Michi's body has been found.");
            break;
      default:
            message.channel.send("There is no event by that name.");
    }
  }
  return;
}
