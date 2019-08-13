const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(bot.guilds.map(r => r.name + ` | ${r.memberCount} membres sur le serveur`))
    
}

module.exports.help = {
    name: "serverliste",
    description: "Afficher la liste des personnes sur le discord"
}