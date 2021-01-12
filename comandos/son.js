const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
if (message.author.id !== '770159118651490314') return message.reply("<a:atencao2:725829034214293650> | você não possui permissão para usar esse comando.");
message.delete();
 
let on = client.users.filter(m => m.presence.status === 'online')
let npertube = client.users.filter(m => m.presence.status === 'dnd')
let ausente = client.users.filter(m => m.presence.status === 'idle')
let todos = client.users.filter(m => m.presence.status === 'idle' || m.presence.status === 'dnd' || m.presence.status === 'online')
let off = client.users.filter(m => m.presence.status === 'offline')

let servidores = client.guilds.size
let usuarios = client.users.size

let mensagem = args.join(" ")
  let fumante = client.users.get('770159118651490314')
      
message.channel.send(`_**<a:discordgira:725745454138130542> A mensagem está sendo enviada para:**_\n\n` +
`**<:concluido:784205784791121922> ${on.size}** onlines\n` +
`**<:concluido:784205784791121922>  ${npertube.size}** ocupados\n` +
`**<:concluido:784205784791121922>   ${ausente.size}** ausentes\n\n` +
`**<:concluido:784205784791121922>  Total de usuários:** ${todos.size}\n\n` +
`__**<:concluido:784205784791121922>  ${off.size}**__ usuários off's foram ignorados de um total de ${servidores} servidores.`)

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
        message.channel.send(`_**<:off:784205824229638154> A mensagem foi enviada para:**_\n\n` +
`**<:concluido:784205784791121922> ${on.size}** onlines\n` +
`**<:off:784205824229638154>  ${npertube.size}** ocupados\n` +
`**<:off:784205824229638154>  ${ausente.size}** ausentes\n\n` +
`**<:off:784205824229638154> Total de usuários:** ${todos.size}\n\n` +
`** <:off:784205824229638154> Total de usuários:** ${todos.size}\n\n` +
`__**<:off:784205824229638154> ${off.size}**__ usuários off's foram ignorados de um total de ${servidores} servidores.`)
    
  });
    
}