const discord = require('discord.js'); 
const spreadsheet = require('../spreadsheet.js') //Permite a utilização das funções do arquivo spreadsheet.js fora da pasta comandos.


module.exports.run = async (client, message, args) => {
  message.channel.send(`${spreadsheet.sheet.title}`);
};