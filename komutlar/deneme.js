const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
module.exports = {
    name: "deneme",
    description: "deneme",
    type: 1,
    dm_permission: false,
   // perm: "MANAGE_GUILD",
    options: [
        {
            name:"choices",
            description:"member",
            description_localizations: { "tr": "merhaba", "en-US":"hello" },
            type:3,
            required:true,
            choices:[{name:"Seçenek 1",value:"1"},{name:"Seçenek 2",value:"2"}],
        },
        // {
        //     name:"sub-commands",
        //     description:"Kullanıcı",
        //     type:1,
        //     options:[{name:"selam4",description:"deneme",type:3},{name:"sela2m3",description:"denem2e",type:4}]
        // }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        if(interaction.options.get("choices").value == "1")
        {
            interaction.reply({content:"1. seçenek seçildi"})
        }
        else{
            interaction.reply({content:"2. seçenek seçildi"})
        }
    }
}