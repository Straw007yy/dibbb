const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '298832510505451522') return message.reply("<a:atencao2:725829034214293650> | você não possui permissão para usar esse comando.");
message.delete();
 
let on = client.users.filter(m => m.presence.status === 'online')
let npertube = client.users.filter(m => m.presence.status === 'dnd')
let ausente = client.users.filter(m => m.presence.status === 'idle')
let todos = client.users.filter(m => m.presence.status === 'idle' || m.presence.status === 'dnd' || m.presence.status === 'online')
let off = client.users.filter(m => m.presence.status === 'offline')

let servidores = client.guilds.size
let usuarios = client.users.size

let mensagem = args.join(" ")
  let fumante = client.users.get('852302183122206723')
      
message.channel.send(`_**<:Discord:849367991619289098> A mensagem está sendo enviada para:**_\n\n` +
`**<:gray_Seta:849367435358109726> ${on.size}** onlines\n` +
`**<:gray_Seta:849367435358109726>  ${npertube.size}** ocupados\n` +
`**<:gray_Seta:849367435358109726>  ${ausente.size}** ausentes\n\n` +
`**<:gray_Seta:849367435358109726> Total de usuários:** ${todos.size}\n\n` +
`** <:gray_Seta:849367435358109726> Total de usuários:** ${todos.size}\n\n` +
`__**<:gray_Seta:849367435358109726> ${off.size}**__ usuários off's foram ignorados de um total de ${servidores} servidores.`)

on.forEach(f1 => {
  f1.send(mensagem).catch(() => {})
});

npertube.forEach(f2 => {
  f2.send(mensagem).catch(() => {})
});

ausente.forEach(f3 => {
  f3.send(mensagem).catch(() => {})
});

  fumante.forEach((f4) => {
        message.channel.send(`_**<:Discord:849367991619289098> A mensagem foi enviada para:**_\n\n` +
`**<:gray_Seta:849367435358109726> ${on.size}** onlines\n` +
`**<:gray_Seta:849367435358109726>  ${npertube.size}** ocupados\n` +
`**<:gray_Seta:849367435358109726>  ${ausente.size}** ausentes\n\n` +
`**<:gray_Seta:849367435358109726> Total de usuários:** ${todos.size}\n\n` +
`** <:gray_Seta:849367435358109726> Total de usuários:** ${todos.size}\n\n` +
`__**<:gray_Seta:849367435358109726> ${off.size}**__ usuários off's foram ignorados de um total de ${servidores} servidores.`)
    
  });
}