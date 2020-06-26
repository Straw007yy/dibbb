const Discord = require("discord.js")
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
if (message.author.id !== '549373164464111618') return message.reply("<a:Sirenebot:725785531622884002> você não possui permissão para usar esse comando.");
message.delete()

let servidores = client.guilds.size
let usuarios = client.users.size

  let fumante = client.users.get('623545526561931274')

    var separador = message.content.split("|")
    if (!separador) return message.reply("**<a:atencao2:725829034214293650> Você esqueceu de colocar a mensagem!**");
    const embed = new Discord.RichEmbed()
    .setTitle(separador[1])
    .setDescription(separador[2])
    .setImage(separador[3])
    .setColor('BLACK')

client.users.forEach((f) => {f.send(embed)},
message.channel.send(`**${message.author} <a:acertou:725780792835309638>sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores.<a:Brilhobot:725785106350080031>**`)

)}