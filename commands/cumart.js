const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'cumart',
    execute(client, message, args){
        if (!message.guild) return;
            async function cumart() {
            const GIF = await neko.nsfw.cumArts();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random cumart image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            cumart();
    }
}