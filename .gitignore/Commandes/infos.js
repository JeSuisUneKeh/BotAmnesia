const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.reply(
        '\n 『 ☢INFORMATIONS☢ 』 \n⇝ **GENERALES**\nServeur: Amnesia\nVersion: 1.8\nIp: play.amnesiamc.cf\n⇝ **COMMANDES**\nInfos ↠ /infos\nSite ↠ /site\nDiscord ↠ /discord\nIp ↠ /ip\nYoutube ↠ /yt'
    );
    
}

module.exports.help = {
    name: "infos",
    description: "Afficher les informations"
}