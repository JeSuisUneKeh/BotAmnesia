const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.reply(
        '\n Voici l\'ip pour rejoindre le serveur: play.amnesiamc.cf'
    );
    
}

module.exports.help = {
    name: "ip",
    description: "Afficher l'ip du serveur"
}