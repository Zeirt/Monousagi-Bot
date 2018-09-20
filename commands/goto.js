const fs = require("fs");
const config = require('../config.js');
var status = require('../util/status');

exports.run = (client, message, params) => {
  if(message.guild == null) {
    console.log(message.createdTimestamp + "|" + "m!goTo by " + message.author.username);
    if(!status.begin) {
      console.log("Used while mafia wasn't in session. Fuck off.");
      return; //not allowed
    }
    var room = "";
    for(var i = 0; i < params.length; i++) {
      //Concat the whole argument to make senrence
      if(i < (params.length-1)) room = room.concat(params[i]) + " ";
      else room = room.concat(params[i]);
  }
    console.log("Asked for: '" + room + "'");
    console.log(config.investigation[room]);
    var users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
    if(config.investigation[room]) {
        console.log("Room granted!");
        var numRoom = config.investigation[room]; //will get room number
        var userData = users[message.author.id]; //get user from file
        if(!userData){//User doesn't exist, save it
            users[message.author.id] = {r: 0};
        }
        users[message.author.id].r = numRoom;//assign room number to user
        //select description in case of dynamic statuses!
        var desc;
        switch(numRoom) { //THESE MUST BE EDITTED WHEN THERE'S A CHANGE!
            case 1:
                if(status.events.event1) desc = config.desc[room.concat("v1")];
                else desc = config.desc[room];
                break;
            case 2:
                if(status.events.event2) desc = config.desc[room.concat("v1")];
                else desc = config.desc[room];
                break;
            case 3:
                if (status.events.event3) desc = config.desc[room.concat("v1")];
                else desc = config.desc[room];
                break;
            default:
                desc = config.desc[room];
        }
        message.author.send(config.inside + "\n\n" + desc); //tell user
        fs.writeFile('./users.json',JSON.stringify(users),console.error);
        return;
    } else {
        var nope = Math.floor(Math.random()*config.gotoFail.length);
        message.author.send(config.gotoFail[nope]);
        return;
    }
  }
  return;
}
