Sobre.on('collect', r2 => { 
           let sobre = new Discord.RichEmbed()
                .setTitle(":thought_balloon:┆Sobre mim")
                .setDescription(`**Olá, eu sou a  ${client.user.username}, um bot [Brasileiro](https://pt.wikipedia.org/wiki/Brasil) :flag_br: focado em anúncios DM e divulgação criado em [Javascript](https://nodejs.org/pt-br/) <:jscdm:614400268901023754>, atualmente estou hospedo em uma host free a [Glitch](https://glitch.com/) <:glitchcdm:614400605078814731>, mais estou em busca de uma VPS boa.\n\nAtualmente estou em ${client.guilds.size} servidores com um total de ${client.users.size} usuários!**`)
                .setThumbnail(client.user.avatarURL)
                .addField('<:7774:593646210187919380> Me adicione em seu servidor:', `**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=610280094799233025&permissions=2146958847&scope=bot)**`)
                .setColor("#ff47ec")
                .setThumbnail("https://cdn.discordapp.com/emojis/614407735043424256.png?v=1")
                .setFooter(user + " • Pág. 6/6", av),
               c.edit(sobre);
        });