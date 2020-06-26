var Discord = require('discord.js')

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    if(!message.member.hasPermission('CREATE_INSTANT_INVITE')) {
        return message.channel.send(`<a:não:725874449425104946> | ${message.author} Me parece que você não tem permissão de criar convites no servidor.`)
    }
    try {
    const invite = await message.channel.createInvite({maxAge: 0});

    message.reply(`<a:carta:725873565198712904>**Convite Criado:** \n ${invite}`)


} catch (err) {
    message.reply('**<a:atencao:725829034214293650> | Por algum motivo eu não tenho permissão de criar convites nesse servidor.**')
   }
}

module.exports.config = { 
    name: 'cc',
    aliases: ['criarconvite']
}