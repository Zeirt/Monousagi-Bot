const fs = require("fs");
const config = require('../config.js');
var status = require('../util/status');

exports.run = (client, message, params) => {
  if (message.guild == null){
    if(!status.begin) {
      console.log("Used while mafia wasn't in session. Fuck off.");
      return; //not allowed
    }
    const adminChannel = client.channels.find("name", config.adminChannel);
    var args = input.split(" ").slice(1);
    var obj = "";
    for(var i = 0; i < args.length; i++) {
        //Concat the whole argument
        if(i < (args.length-1)) obj = obj.concat(args[i]) + " ";
        else obj = obj.concat(args[i]);
    }
    console.log(message.createdTimestamp + "|" + "m!investigate by " + message.author.username + ". Asked for " + obj);
    var users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
    if(users[message.author.id] == undefined) return;
    var room = users[message.author.id].r;
    console.log(room);
    //console.log("Entered the function! Room is " + room + " and bullet is " + obj);
    switch (room) {
        case 1:
            if (status.events.event1) {
                if(config.r1v1[obj]){
                //Object exists in the room! Fetch and show
                message.author.send(config.bulletGet + config.r1v1[obj]);
                adminChannel.send(message.author + config.bulletAlert + obj);
                return;
                } else {
                    //Object doesn't exist
                    var nope = Math.floor(Math.random()*config.sleuthFail.length);
                    message.author.send(config.sleuthFail[nope]);
                }
            }else {
                if(config.r1[obj]){
                //Object exists in the room! Fetch and show
                message.author.send(config.bulletGet + config.r1[obj]);
                adminChannel.send(message.author + config.bulletAlert + obj);
                return;
                } else {
                    //Object doesn't exist
                    var nope = Math.floor(Math.random()*config.sleuthFail.length);
                    message.author.send(config.sleuthFail[nope]);
                }
            }
            break;
        case 2:
            if (status.events.event2) {
                if(config.r2v1[obj]){
                //Object exists in the room! Fetch and show
                message.author.send(config.bulletGet + config.r2v1[obj]);
                adminChannel.send(message.author + config.bulletAlert + obj);
                return;
                } else {
                    //Object doesn't exist
                    var nope = Math.floor(Math.random()*config.sleuthFail.length);
                    message.author.send(config.sleuthFail[nope]);
                }
            } else { 
                if(config.r2[obj]){
                    //Object exists in the room! Fetch and show
                    message.author.send(config.bulletGet + config.r2[obj]);
                    adminChannel.send(message.author + config.bulletAlert + obj);
                    return;
                } else {
                    //Object doesn't exist
                    var nope = Math.floor(Math.random()*config.sleuthFail.length);
                    message.author.send(config.sleuthFail[nope]);
                }
            }
            break;
        case 3:
            if (status.events.event3) {
                if(config.r3v1[obj]){
                //Object exists in the room! Fetch and show
                message.author.send(config.bulletGet + config.r3v1[obj]);
                adminChannel.send(message.author + config.bulletAlert + obj);
                return;
                } else {
                    //Object doesn't exist
                    var nope = Math.floor(Math.random()*config.sleuthFail.length);
                    message.author.send(config.sleuthFail[nope]);
                }
            } else { 
                if(config.r3[obj]){
                    //Object exists in the room! Fetch and show
                    message.author.send(config.bulletGet + config.r3[obj]);
                    adminChannel.send(message.author + config.bulletAlert + obj);
                    return;
                } else {
                    //Object doesn't exist
                    var nope = Math.floor(Math.random()*config.sleuthFail.length);
                    message.author.send(config.sleuthFail[nope]);
                }
            }
            break;
        case 4:
            if(config.r4[obj]){
                //Object exists in the room! Fetch and show
                message.author.send(config.bulletGet + config.r4[obj]);
                adminChannel.send(message.author + config.bulletAlert + obj);
                return;
            } else {
                //Object doesn't exist
                var nope = Math.floor(Math.random()*config.sleuthFail.length);
                message.author.send(config.sleuthFail[nope]);
            }
            break;
        case 5:
            if(config.r5[obj]){
                //Object exists in the room! Fetch and show
                message.author.send(config.bulletGet + config.r5[obj]);
                adminChannel.send(message.author + config.bulletAlert + obj);
                return;
            } else {
                //Object doesn't exist
                var nope = Math.floor(Math.random()*config.sleuthFail.length);
                message.author.send(config.sleuthFail[nope]);
            }
            break;
        case 6:
            if(config.r6[obj]){
                //Object exists in the room! Fetch and show
                message.author.send(config.bulletGet + config.r6[obj]);
                adminChannel.send(message.author + config.bulletAlert + obj);
                return;
            } else {
                //Object doesn't exist
                var nope = Math.floor(Math.random()*config.sleuthFail.length);
                message.author.send(config.sleuthFail[nope]);
            }
            break;
        case 7:
            if(config.r7[obj]){
                //Object exists in the room! Fetch and show
                message.author.send(config.bulletGet + config.r7[obj]);
                adminChannel.send(message.author + config.bulletAlert + obj);
                return;
            } else {
                //Object doesn't exist
                var nope = Math.floor(Math.random()*config.sleuthFail.length);
                message.author.send(config.sleuthFail[nope]);
            }
            break;
        case 8:
            if (status.events.event3) {
                if(config.r8[obj]){
                    //Object exists in the room! Fetch and show
                    message.author.send(config.bulletGet + config.r8[obj]);
                    adminChannel.send(message.author + config.bulletAlert + obj);
                    return;
                } else {
                    //Object doesn't exist
                    var nope = Math.floor(Math.random()*config.sleuthFail.length);
                    message.author.send(config.sleuthFail[nope]);
                }
            } else {
                if(config.r8[obj]){
                    //Object exists in the room! Fetch and show
                    message.author.send(config.bulletGet + config.r8[obj]);
                    adminChannel.send(message.author + config.bulletAlert + obj);
                    return;
                } else {
                    //Object doesn't exist
                    var nope = Math.floor(Math.random()*config.sleuthFail.length);
                    message.author.send(config.sleuthFail[nope]);
                }
            }
            break;
        case 9:
            if(config.r9[obj]){
                //Object exists in the room! Fetch and show
                message.author.send(config.bulletGet + config.r9[obj]);
                adminChannel.send(message.author + config.bulletAlert + obj);
                return;
            } else {
                //Object doesn't exist
                var nope = Math.floor(Math.random()*config.sleuthFail.length);
                message.author.send(config.sleuthFail[nope]);
            }
            break;
        case 10:
            if(config.r10[obj]){
                //Object exists in the room! Fetch and show
                message.author.send(config.bulletGet + config.r10[obj]);
                adminChannel.send(message.author + config.bulletAlert + obj);
                return;
            } else {
                //Object doesn't exist
                var nope = Math.floor(Math.random()*config.sleuthFail.length);
                message.author.send(config.sleuthFail[nope]);
            }
            break;
        case 11:
            if(config.r11[obj]){
                //Object exists in the room! Fetch and show
                message.author.send(config.bulletGet + config.r11[obj]);
                adminChannel.send(message.author + config.bulletAlert + obj);
                return;
            } else {
                //Object doesn't exist
                var nope = Math.floor(Math.random()*config.sleuthFail.length);
                message.author.send(config.sleuthFail[nope]);
            }
            break;
        default:
            message.author.send(config.noRoom);
    }
    return;
  }
return;
}
