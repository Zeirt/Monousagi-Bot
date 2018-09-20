var Discord = require("discord.js");
const fs = require("fs");
var client = new Discord.Client();
var status = require('./util/status');
require('./util/eventLoader')(client);

//System default
const config = require('./config');

client.login("Token");
