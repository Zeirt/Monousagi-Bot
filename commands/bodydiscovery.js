const config = require('../config.js');
exports.run = (client, message, params) => {
  if((message.member.highestRole.name==config.adminRole)||(message.member.highestRole.name==config.modRole)){
      const rpChannel = client.channels.find("name", config.rpChannel);
      rpChannel.send("**Bing bong bong bing!** \nhttps://orig00.deviantart.net/7bc7/f/2017/238/b/2/monousagi_screen_by_zeirt-dblcxjw.png \n\n"
      	+ "_**A body has been discovered!**_ \n\nAfter a certain amount of time, which you can use however you like, the **class trial** will begin!"
      	+ "\n\nHave a nice death! @everyone");
      console.log(message.createdTimestamp + "|" + "m!BodyDiscovery by " + message.author.username);
  }
  return;
}
