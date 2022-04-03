const {Client,ContextMenuInteraction, MessageEmbed} = require("discord.js");
module.exports = {
    name: "profil",
    /**
     * 
     * @param {Client} client 
     * @param {ContextMenuInteraction} interaction 
     */
    run: async (client, interaction) => {
        const uye = await interaction.guild.members.fetch(interaction.targetId);
      const embed = new MessageEmbed()
        .setTitle(`${client.user.username} Hakkında bilgiler`)
        .addField("Kullanıcı IDsi",`${uye.id}`)
        .addField("Kullanıcı Adı",`${uye.user.tag}`)
        .addField("Hesabının Açılış tarihi",`<t:${parseInt(uye.user.createdTimestamp / 1000)}:R>`)
        interaction.reply({embeds:[embed]})
    }
}