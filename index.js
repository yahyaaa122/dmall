const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const config = require('./config.json');
const token = config.token;
const prefix = config.prefix;
const noob = config.ID;


client.on("ready", () => {
  console.log(`Subscribe to Zardex 1337!`)
  console.log(`Prefix : ${prefix}`)
  console.log(`https://discord.gg/8rf76uKxSA`)
  client.user.setActivity({ type: "WATCHING", name: `ROX eSports` });
});


client.on("message", message => {

  if (message.content.startsWith(prefix + 'dm')) {
    if (message.author.id != noob) { //Defines the bot Owner.
      return message.reply(':x: stfu you cant use it')
    }
    else {
      message.delete
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult).then(console.log(`[+] Successfully Messaged | ${member.user.username}#${member.user.discriminator}`)).catch(e => console.error(`[-] Member might have DM's Disabled | ${member.user.username}#${member.user.discriminator}`));
      })
      console.log(`[/] Successfull.`)
      message.channel.send(`DMMMMMMMM`).then(message.delete({ timeout: 4000 }));
    }
  }

})

client.login(token);
