const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.reply(
        '\n Voici la liste des partenariats disponible sur le serveur:'
    );
    
}

module.exports.help = {
    name: "yt",
    description: "Afficher les partenariats disponible"
}