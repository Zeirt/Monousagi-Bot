const fs = require("fs");
var status = require('../util/status');
var users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

module.exports = client => {
  var userData = users["begin"]; //get begin status from file. In case it disconnected
  if(users["begin"].begin == 0){//No begin, assume normal duties
      client.user.setGame("Despair!");
  } else {
      status.begin = true; //DISCONNECTED. Keep begin
      //check dynamic statuses and update if necessary
      if(users["sunyul"].s == 1) status.events.event1 = true;
      if(users["trap"].s == 1) status.events.event2 = true;
      if(users["door"].s == 1) status.events.event3 = true;
      client.user.setGame("Investigation Underway!");
  }
  //Ready to go
  if(status.begin){
    console.log("There's an investigation underway. Status:");
    console.log(status.events.event1, status.events.event2, status.events.event3);
  }
  else {
    console.log("Performing non-investigation duties.");
  }
  console.log('Monousagi is ready!');
}
