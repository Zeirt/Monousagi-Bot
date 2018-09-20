const config = require ('../config.js');
module.exports = member => {
  //get channel
  var chan = member.guild.channels.find("name", config.announcementChannel);
  //Announce
  chan.send(member.user.username + config.memberLeft);
}
