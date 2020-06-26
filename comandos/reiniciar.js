const Discord = require('discord.js')

exports.run = (client, message, args) => {
if (message.author.id !== '549373164464111618') message.reply("<a:alertamdp:604065603749281815> | você não possui permissão para usar esse comando.")
  if (message.content === '$.{prefix}reiniciar') {
	message.react('');
}

    process.exit()
  
}