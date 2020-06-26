module.exports.run = (client, message, args) => {
    message.delete();
    if (!message.member.hasPermission("MANAGE_CHANNELS", false, true, true)) {
        message.reply("**<a:atencao2:725829034214293650> Você não possui permissões para utilizar esse comando!<a:rosa_brilho:725865943607017502>**");
        return 0;
    }
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS", false, true, true)) {
        message.reply("**<a:atencao2:725829034214293650> Não tenho permissão para alterar o tópico do canal!<a:rosa_brilho:725865943607017502>**");
        return 0;
    }
    let text = args.join(' ');
    if (!text.length) {
        message.reply("<a:robo:725878687484084274> Você esqueceu de colocar a mensagem do tópico!<a:rosa_brilho:725865943607017502>");
        return 0;
    } else if (text.length > 1024) {
        message.reply(`<a:atencao2:725829034214293650>O tópico só pode conter 1024 caracteres<a:rosa_brilho:725865943607017502>`);
        return 0;
    }
    message.channel.setTopic(text).then(() => {
        message.reply(`<a:acertou:725780792835309638> Você definiu a mensagem: **${text}** | no tópico do servidor!<a:rosa_brilho:725865943607017502>`);
    }).catch(()=>{});
};