var Discord = require('discord.js')
const client = new Discord.Client();

exports.run = (client, message, args) => {
  message.delete()
  if(!message.member.hasPermission("ADMINISTRATOR") & message.author.id !== '549373164464111618' && message.author.id !== '712317949737697361') return message.reply("<a:atencao:726844496339402824> você não possui permissão para usar esse comando.")

  
let mensagem = args.join(" ")

message.channel.send(mensagem)

}