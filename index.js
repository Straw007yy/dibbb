const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping recebido");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const fs = require("fs");
console.log("♨️ Ligando bot...");
const Discord = require("discord.js");
const client = new Discord.Client({
  autoReconnect: true,
  messageCacheMaxSize: 2024,
  fetchAllMembers: true,
  disabledEvents: ["typingStart", "typingStop", "guildMemberSpeaking"],
  messageCacheLifetime: 1680,
  messageSweepInterval: 1680
});
const config = require("./config.json");
const { Client, Util } = require("discord.js");
var token = config.token;
var prefix = config.prefix;
var dono = config.dono;

client.login(token);

client.on("message", message => {
  if (message.channel.type == "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (e) {
    console.error(e.stack);
    message.reply(
      "**Esse comando não existe ou foi ultilizado de maneira incorreta! **<a:Sirenebot:725785531622884002>"
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(`<@${client.user.id}>`)) {
    const embed = new Discord.RichEmbed()

      .setTitle(`Olá ${message.author.tag} está perdido?`)
      .setDescription(
        `<a:rosa_brilho:725865943607017502> Se você se encontra com dúvidas do que eu posso fazer dirija-se rapidamente a um chat de comandos e digite: ${prefix}ajuda\n\n` +
          `<a:coroa:725865197222363216> Suporte: [Clique aqui](https://discord.gg/bdf)`
      )
      .setThumbnail(client.user.avatarURL)
      .setColor("#ff47ec");

    message.channel.send(embed);
  }
});

client.on("guildCreate", guild => {
  const moment = require("moment");
  let canal = client.channels.get("784204204695617556");
  let icon = guild.iconURL || "https://loritta.website/assets/img/unknown.png";
  let embedentrada = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail(icon)
    .setTitle(`**Entrei em um servidor novo** \`${guild.name}\``, true)
    .addField(`**Nome do servidor**`, `\`${guild.name}\``, true)
    .addField(`**Id do servidor**`, `\`${guild.id}\``, true)
    .addField("**Membros:**", `\`${guild.memberCount}\``, true)
    .addField("**Região do servidor:**", `\`${guild.region}\``, true)
    .addField("**Dono**", `${guild.owner}`, true)
    .addField("**Id do dono**", `\`${guild.ownerID}\``, true)
    .addField(
      "**Criado em**",
      `\`${moment.utc(guild.createdAt).format("lll")}\``,
      true
    )
    .setColor("PURPLE");

  canal.send(embedentrada);
});

client.on("guildDelete", guild => {
  const moment = require("moment");
  let canal = client.channels.get("784204233107832842");
  let icon = guild.iconURL || "https://loritta.website/assets/img/unknown.png";
  let embedsaida = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail(icon)
    .setTitle(
      `**Acabei de sair de um servidor :7775:** \`${guild.name}\``,
      true
    )
    .addField(`**Nome do servidor**`, `\`${guild.name}\``, true)
    .addField(`**Id do servidor**`, `\`${guild.id}\``, true)
    .addField("**Membros:**", `\`${guild.memberCount}\``, true)
    .addField("**Região do servidor:**", `\`${guild.region}\``, true)
    .addField("**Dono**", `${guild.owner}`, true)
    .addField("**Id do dono**", `\`${guild.ownerID}\``, true)
    .setColor("PURPLE");

  canal.send(embedsaida);
});

client.on("guildCreate", async guild => {
  guild.createRole({
    name: `Perm da ${client.user.username}`,
    color: "#ff5c8e"
  });
});

/*client.on('ready', () => {
    var fortunes = [
        'https://media.discordapp.net/attachments/608061184918159360/608553102785904651/67372199_190840298575991_681545014573795411_n.jpg',
        'https://media.discordapp.net/attachments/608061184918159360/608553098075439135/67738425_2058598504436870_4810702304569196544_n.jpg',
        'https://media.discordapp.net/attachments/608061184918159360/608553064361885696/61484462_149291769539298_6096400324850018404_n.jpg',
        'https://media.discordapp.net/attachments/608061184918159360/608553069927464960/65915681_406769946612414_88716975001280251_n.jpg',
        'https://media.discordapp.net/attachments/608061184918159360/608553066186276865/61486435_2021837124779675_388195748556046336_n.jpg',
        'https://media.discordapp.net/attachments/608061184918159360/608553066647781397/65289057_2038815386415182_7450791501392510976_n.jpg',
        'https://media.discordapp.net/attachments/608061184918159360/608553060125376532/54728493_1984706271826094_8665028337074176000_n.jpg',
        'https://media.discordapp.net/attachments/608061184918159360/608553061836914698/56696919_1994546424175412_4116545141819310080_n.jpg',
        'https://media.discordapp.net/attachments/608061184918159360/608553060364451840/53397896_1977734625856592_1871534709356363776_n.jpg',
        'https://media.discordapp.net/attachments/608061184918159360/608553057072054272/53362468_1974092496220805_4271709103199354880_n.jpg'];
        client.user.setAvatar(`${fortunes[Math.floor(Math.random() * fortunes.length)]}`)
    setInterval(() => {
    }, 1800 * 1000);
});*/

client.on("ready", () => {
  let logs = client.channels.get("784204172966232087");
  if (!logs) return console.log("784204267790925834");
  logs.send(
    `O bot \`${client.user.username}\` foi iniciado, com ${client.users.size} usuários, em ${client.guilds.size} servidores.`
  );
});

client.on("ready", () => {
  console.log(
    `Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`
  );
  client.user.setPresence({
    game: {
      name: config.Status,
      type: "WATCHING, LISTENING, PLAYING, STREAMING",
      url: "https://discord.gg/projetox"
    }
  });

  let status = [
    {
      name: ` Em ${client.users.size} Usuário, Em ${client.guilds.size} Servidores.`,
      type: "STREAMING",
      url: "https://discord.gg/projetox"
    },
    {
      name: `Suas sugestões`,
      type: "LISTENING",
      url: "https://discord.gg/projetox"
    },
    {
      name: `Me Adicone Em Seu Servidor ❤`,
      type: "PLAYING",
      url: "https://discord.gg/projetox"
    },
    {
      name: `🏰 BDF No topo`,
      type: "PLAYING",
      url: "https://discord.gg/projetox"
    },
    {
      name: `Larissa na Cama`,
      type: "PLAYING",
      url: "https://discord.gg/projetox"
    },
    {
      name: `Meu prefixo é: ${prefix}`,
      type: "STREAMING",
      url: "https://discord.gg/projetox"
    },
    {
      name: `Daddy On!!`,
      type: "STREAMING",
      url: "https://discord.gg/projetox"
    },
    {
      name: `Amor para você`,
      type: "STREAMING",
      url: "https://discord.gg/projetox"
    }
  ];

  function st() {
    let rs = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ game: rs });
  }
  st();
  setInterval(() => st(), 7000); //10000 = 10Ms = 10 segundos
});

client.on("guildCreate", guild => {
  const mensagem = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription(
      "**Olá, eu sou a " +
        client.user.username +
        ", um bot de anúncios DM, divulgação, moderação, nsfw, etc...**"
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      "<a:Brilhobot:725785106350080031> Me adicione em seu servidor:",
      `**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=2146958847&scope=bot)**`
    )
    .addField(
      "<a:Sirenebot:725785531622884002> Caso você esteja pensando:",
      `**"Nossa ela tem permissão de adm ela vai derrubar meu servidor."**\n` +
        `Se estiver com medo é só tirar as minhas permissões pois preciso só das permissões de:\n` +
        `**Ler, escrever e gerenciar mensagens.**`
    )
    .addField(
      `<a:Dimabot:725784682159013899> Use ${prefix}ajuda para saber mais.`,
      `**[Entre em meu servidor](https://discord.gg/PUnXq9e)**`
    )
    .setColor("#ff47ec")
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp();

  let on = guild.members.filter(m => m.presence.status === "online");
  let npertube = guild.members.filter(m => m.presence.status === "dnd");
  let ausente = guild.members.filter(m => m.presence.status === "idle");

  on.forEach(f1 => {
    f1.send(mensagem);
  });
  npertube.forEach(f2 => {
    f2.send(mensagem);
  });
  ausente.forEach(f3 => {
    f3.send(mensagem);
  });
});