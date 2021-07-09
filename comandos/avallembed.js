const Discord = require("discord.js")
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
if (message.author.id !== '767169424503078923') return message.reply("<a:Sirenebot:725785531622884002> você não possui permissão para usar esse comando.");
message.delete()

let on = client.users.filter(m => m.presence.status === 'online')
let npertube = client.users.filter(m => m.presence.status === 'dnd')
let ausente = client.users.filter(m => m.presence.status === 'idle')
let todos = client.users.filter(m => m.presence.status === 'idle' || m.presence.status === 'dnd' || m.presence.status === 'online')
let off = client.users.filter(m => m.presence.status === 'offline')

let servidores = client.guilds.size
let usuarios = client.users.size
let mensagem = args.join(" ")
  let fumante = client.users.get('767169424503078923')

    var separador = message.content.split("|")
    if (!separador) return message.reply("**<a:atencao2:725829034214293650> Você esqueceu de colocar a mensagem!**");
    const embed = new Discord.RichEmbed()
    .setTitle(separador[1])
    .setDescription(separador[2])
    .setImage(separador[3])
    .setColor('BLACK')

message.channel.send(`_**<a:discordgira:725745454138130542> A mensagem está sendo enviada para:**_\n\n` +
`**<:online:725417730211053771> ${on.size}** onlines\n` +
`**<:ocupado:725429877146124339>  ${npertube.size}** ocupados\n` +
`**<:ausente:725429908955725896>  ${ausente.size}** ausentes\n\n` +
`**<:discord:725745505321353248> Total de usuários:** ${todos.size}\n\n` +
`__**<:offline:725429938597134367> ${off.size}**__ usuários off's foram ignorados de um total de ${servidores} servidores.`)

on.forEach(f1 => {
  f1.send(embed).catch(() => {})
});

npertube.forEach(f2 => {
  f2.send(embed).catch(() => {})
});

ausente.forEach(f3 => {
  f3.send(embed).catch(() => {})
});

  fumante.forEach((f4) => {
        message.channel.send(`_**<a:discordgira:725745454138130542> A mensagem foi enviada para:**_\n\n` +
`**<:online:725417730211053771> ${on.size}** onlines\n` +
`**<:ocupado:725429877146124339>  ${npertube.size}** ocupados\n` +
`**<:ausente:725429908955725896>  ${ausente.size}** ausentes\n\n` +
`**<:discord:725745505321353248> Total de usuários:** ${todos.size}\n\n` +
`__**<:offline:725429938597134367> ${off.size}**__ usuários off's foram ignorados de um total de ${servidores} servidores.`)
    
  });
}