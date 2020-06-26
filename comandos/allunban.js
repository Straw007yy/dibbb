module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS", false, true, true)) {
        message.reply("<a:Sirenebot:725785531622884002> Desculpe, você não tem permissão de desbanir usuários neste servidor!");
        return 0;
    }
    if (!message.guild.me.hasPermission("BAN_MEMBERS", false, true)) {
        message.reply("<a:atencao2:725829034214293650> Eu não tenho permissão para desbanir usuários nesse servidor.");
        return 0;
    }
    let bannedUsers = await message.guild.fetchBans().catch(()=>{});
    let size = bannedUsers.size;
    if (!size) {
        message.reply("<a:atencao2:725829034214293650> Não há usuários banidos neste servidor");
        return 0;
    }
    await message.channel.send(`Começando | 0/${size}`).then(async m => {
        let i = 0;
        for (var user of bannedUsers.values()) {
            await m.guild.unban(user).then(() => {
                ++i;
                if (i % 10 === 0) {
                    m.edit(`Usuários desbanidos: ${i}/${size}`).catch(console.error);
                }
            }).catch(()=>{});
        }
        m.edit("<a:acertou:725780792835309638> Todos os usuários foram desbanidos!<a:Brilhobot:725785106350080031>");
    }).catch(err => console.log(err));
};