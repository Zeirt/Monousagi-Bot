const config = require('../config.js');

var currentTarget;
var firstRun = true;

exports.run = (client, message, params) => {
  //Change target for parrot
  if (params[0] == "ct") {
      if((message.member.highestRole.name==config.adminRole)||(message.member.highestRole.name==config.modRole)){
          var args = message.content.toLowerCase().split(" ").slice(2);//split it in an array, remove m!parrot ct
          var target = "";
          for(var i = 0; i < args.length; i++) {
              //Concat the whole argument to make
              if(i < (args.length-1)) target = target.concat(args[i]) + " ";
              else target = target.concat(args[i]);
          }
          //change target
          console.log(message.createdTimestamp + "|" + "!changeTarget by " + message.author.username + "New target: " + target);
          var backupTarget = currentTarget;
          currentTarget = client.channels.find("name", target);
          if(currentTarget==null) {
              currentTarget = backupTarget;
              message.channel.send(config.wrongTarget);
          }
          else {
            message.channel.send("Changed Target to: " + currentTarget);
          }
      }
      return;
  }

  //Give current parrot target
  if (params[0] == "t") {
      if((message.member.highestRole.name==config.adminRole)||(message.member.highestRole.name==config.modRole)){
        if(firstRun){
          currentTarget = client.channels.find("name", config.whitelistedChannel);
          firstRun = false;
        }
        message.channel.send("Current target: " + currentTarget);
      }
      return;
  }

  //Send halt message
  if (params[0] == "halt") {
    if((message.member.highestRole.name==config.adminRole)||(message.member.highestRole.name==config.modRole)){
        if(firstRun){
          currentTarget = client.channels.find("name", config.whitelistedChannel);
          firstRun = false;
        }
        const emoji = client.emojis.find("name", "monousagi");
        message.channel.send("Halting RP");
        currentTarget.send("**Please Stand By!**" + emoji);
      }
      return;
  }

    //Send halt message
  if (params[0] == "cont") {
    if((message.member.highestRole.name==config.adminRole)||(message.member.highestRole.name==config.modRole)){
        if(firstRun){
          currentTarget = client.channels.find("name", config.whitelistedChannel);
          firstRun = false;
        }
        const emoji = client.emojis.find("name", "monousagi");
        message.channel.send("Cotinuing RP");
        currentTarget.send("**Continue**" + emoji);
      }
      return;
  }

  //Parrot command
  if((message.member.highestRole.name==config.adminRole)||(message.member.highestRole.name==config.modRole)){
      var parrot = "";
      var mes = message.content.split(" ").slice(1);;
      for(var i = 0; i < mes.length; i++) {
        //Concat the whole argument to make senrence
        if(i < (mes.length-1)) parrot = parrot.concat(mes[i]) + " ";
        else parrot = parrot.concat(mes[i]);
      }
  if(firstRun){
    currentTarget = client.channels.find("name", config.whitelistedChannel);
    firstRun = false;
  }
  currentTarget.send(parrot);
  console.log(message.createdTimestamp + "|" + "!parrot by " + message.author.username + " Content: " + parrot);
  }
  return;
}
