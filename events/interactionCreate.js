const { MessageEmbed } = require("discord.js");
const { Client, CommandInteraction } = require("discord.js");
const fs = require("fs");
const yetki = require("../yetkiler.json");
/**
 * 
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 */
module.exports = (client, interaction) => {
    if (interaction.isContextMenu()) {

        try {
            fs.readdir("./menuCmd", (err, files) => {
                if (err) throw err;
                files.forEach(f => {
                    const cmd = require(`../menuCmd/${f}`);

                    if (interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {
                        return cmd.run(client, interaction);
                    }
                })
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    if (interaction.isCommand()) {
        try {
            fs.readdir("./komutlar", (err, files) => {
                if (err) throw err;
                files.forEach(f => {
                    const cmd = require(`../komutlar/${f}`);

                    if (interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {
                        if (cmd.perm && !interaction.member.permissions.has(cmd.perm))
                            return interaction.reply({ephemeral:true,
                                embeds: [new MessageEmbed()
                                    .setDescription(`Bu komutu kullanabilmek için **${yetki[cmd.perm]}** yetkisine sahip olmalısın.`)]
                            });
                        return cmd.run(client, interaction);
                    }
                })
            })
        }
        catch (err) {
            console.log(err);
        }
    }
}