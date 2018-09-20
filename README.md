# MonoUsagi Bot
A not-so-simple private Discord Bot for the roleplay group Hope's Road to Despair.
He assists in RPs and miscellaneous fun.
It uses Node.js v6.9.2 or newer, and the discord.js v11.2.1 module.

##Usage
* Install Node.js
* In the repo folder, place the discord.js module
* Create bot user in Discord and give it authorization to enter your server
* Give MonoUsagi.js the bot token login (last line)
* Open command prompt and type "node MonoUsagi.js" to begin running the bot

##Features
* !ping         - Will reply saying "pong" to the user (Debug command)
* !shutdown     - Logs out and turns off forcefully. Only do this if host isn't available
* !say          - Sends the argument as a message to the main channel. Only mods can use it (with change target and target seeing)
* !coinFlip     - Will randomly generate a result between heads or tails and notify the user
* !help         - Will PM the user a command list
* !roster       - Will PM the user the current roster of characters (outdated)
* !nutton       - Sends to the channel the nutton joke
* !8ball        - Answers a yes or no question (joke command)

* Greets incoming users and gives them a member role
* Tells other users when a user leaves the server :C

* When an investigation begins, first a mod must enable it either in the mod chat or in the debug channel by using **!begin** . That will launch investigation mode, sending a message explaining its functions.
* Users can go to rooms by saying **!goto name** if the room has relevant information, Monousagi will launch a message saying so. It'll keep track of where all the users are. User-based.
* Once in a room, they can investigate an object by saying **!investigate obj** If the object is a truth bullet, bingo! It'll be sent to the chat and the staff chat will get a message saying who found what. Obviously, they can't see truth bullets not belonging to that room!
* Rooms can be altered by launching events configuring them first and then using **!eventgo [name]**
* Investigation can be ended by mods by using **!end**
* !bodyDiscovery links the main chat the body discovery announcement video
* !eventGo will launch an event that updates a room in the investigation and its contents
