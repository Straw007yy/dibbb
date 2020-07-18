const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();
  if (!args[0])
    return message.reply(
      `<a:Erro:708458738050269307> **O Jeito correto de Usar é:** ` +
        "`" +
        "!emoji nomedoemoji`"
    ).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete`})) //Troque a exclamação ! da mensagem acima pelo seu prefixo
  let emoji = message.guild.emojis.find(emoji => emoji.name === args[0]);
  
  if (!emoji) { 
    message.reply(
      "<a:Erro:708458738050269307> `" + args[0] + "` **não é um emoji deste servidor.**"
    ).delete(10000)//.then(msg => msg.delete(10000)//{ timeout: `10000`, reason: `Autodelete`}))
  } else if (emoji.animated === true) {
    let emb1 = new Discord.RichEmbed()
    .setColor("#ff47ec")
    .setDescription(`**Emoji:** <a:${args[0]}:${emoji.id}>\n**ID:** \`<a:${args[0]}:${emoji.id}>\``)
    
    message.channel.send(emb1)
  } else {
    let emb2 = new Discord.RichEmbed()
    .setColor("#ff47ec")
    .setDescription(`**Emoji:** <:${args[0]}:${emoji.id}>\n**ID:** \`<:${args[0]}:${emoji.id}>\``)
    
    message.channel.send(emb2)
  }
};
 exports.help = {
   name: "emoji"
 }