const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('hi!');
  }
});











client.login('NTE3Nzc0NzQxOTI3NDkzNjQ1.DuLCxg.OH1FKC8OJTH595j31Or6P4lFR2g');
