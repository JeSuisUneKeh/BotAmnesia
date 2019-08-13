const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.reply(
        '\n Voici le lien pour accéder au site: http://amnesia.web.boxtoplay.com/'
    );
    
}

module.exports.help = {
    name: "site",
    description: "Afficher le lien du site"
}