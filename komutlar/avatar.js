const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
module.exports = {
    name: "avatar",
    description: "Kullanıcının avatarını gösterir.",
    type: 1,
   // perm: "MANAGE_GUILD",
    options: [
        {
            name:"kullanıcı",
            description:"Kullanıcı avatar",
            type:6,
            required:false
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
       
        let member = interaction.options.getMember("kullanıcı") || interaction.member;

        interaction.reply({
            embeds:[
                {
                    title: `${member.user.tag} avatarı`,
                    description: `[Link](${member.user.displayAvatarURL({size:1024,format:"png"})})`,
                    color: "AQUA",
                    image: {url: member.user.displayAvatarURL({size:1024,dynamic:true})}
                }
            ]
        })
       
    }
}