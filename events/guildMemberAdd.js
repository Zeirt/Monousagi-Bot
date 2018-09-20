const config = require ('../config.js');
module.exports = member => {
  //get channel
  var chan = member.guild.channels.find("name", config.announcementChannel);
  //Greet them
  chan.send(member.user + config.newMember);
  //Add role
  var role = member.guild.roles.find("name", config.commonRole);
  member.addRole(role);
}
