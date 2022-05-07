const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
module.exports = {
    name: "deneme",
    description: "deneme",
    type: 1,
   // perm: "MANAGE_GUILD",
    options: [
        {
            name:"selam",
            description:"Kullanıcı",
            type:1,
            options:[{name:"selam",description:"deneme",type:3},{name:"sela2m",description:"denem2e",type:4}]
        },
        {
            name:"selam3",
            description:"Kullanıcı",
            type:1,
            options:[{name:"selam4",description:"deneme",type:3},{name:"sela2m3",description:"denem2e",type:4}]
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        let SubCmd = interaction.options.getSubcommand();
        switch(SubCmd){
            case "selam":{
                interaction.reply("selam");
                break;
            }
            case "selam3":{
                interaction.reply("selam3");
                break;
            }
        }
    }
}