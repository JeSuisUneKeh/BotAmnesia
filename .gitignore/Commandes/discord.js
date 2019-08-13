const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.reply(
        '\n Voici le lien d\'invitation pour le discord: https://discord.gg/dAuCnbb'
    );
    
}

module.exports.help = {
    name: "discord",
    description: "Afficher le lien d'invitation pour le discord"
}