const {Client,CommandInteraction, MessageEmbed} = require("discord.js");
module.exports = {
    name: "ping",
    description: "Botun pingini gösterir.",
    type:1,
    options:[],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        const msg = new MessageEmbed()
        .setDescription(`${client.ws.ping} ms`)
        .setColor("AQUA")

        interaction.reply({embeds:[msg]})
    }
}