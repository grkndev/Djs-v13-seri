const { REST } = require("@discordjs/rest");
const { Guild } = require("discord.js");
const { Routes } = require("discord-api-types/v9");
const { token } = require("../ayarlar.json");
const { MessageEmbed } = require("discord.js");
const { MessageActionRow } = require("discord.js");
const { MessageButton } = require("discord.js");
/**
 * @param {Guild} guild 
 */
module.exports = async guild => {
    const { client } = guild;
    const rest = new REST({ version: "9" }).setToken(token)

    try {
        await rest.put(
            Routes.applicationGuildCommands(client.user.id, guild.id),
            { body: client.commands }
        )
        
    } catch (e) {

            await guild.fetchOwner().send({
                embeds: [
                    new MessageEmbed()
                        .setDescription(`Hey! Beni sunucuna ekledin ama Uygulama Komutlarımı kaydetme yetkim olmadığı için Slash(/) komutlarımı kaydedemiyorum. Lütfen Altta bulunan butona basarak beni yeniden davet edebilirmisin?`)
                ],
                components: [
                    new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setLabel("Davet Et!")
                                .setURL("LINK")
                                .setURL("https://discord.com/api/oauth2/authorize?client_id=961999930099118090&permissions=8&scope=bot%20applications.commands")
                        )
                ]
            }).catch(() => {})
        
    }
}