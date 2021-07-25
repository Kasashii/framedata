const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
}); //Pinga constantemente no log para mostrar que o bot está online;

const Discord = require("discord.js"); //Acesso a library do discord.js;
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Acesso ao arquivo de config para obter o token e o prefixo;
client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./comandos/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
}); //Função para permitir que os comandos fiquem localizados na pasta Comandos.

client.login(config.TOKEN); //Ligando o Bot caso ele consiga acessar o token