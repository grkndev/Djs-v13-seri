const {Client,CommandInteraction} = require("discord.js");
const fs = require("fs");

/**
 * 
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 */
module.exports = (client, interaction) => {
    if(interaction.isContextMenu())
    {
        
        try{
            fs.readdir("./menuCmd",(err,files) => {
                if(err) throw err;
                files.forEach(f => {
                    const cmd = require(`../menuCmd/${f}`);
                 
                    if(interaction.commandName.toLowerCase() === cmd.name.toLowerCase())
                    {
                        return cmd.run(client,interaction);
                    }
            })
            })
        }
        catch(err){
            console.log(err);
        }
    }
    if(interaction.isCommand())
    {
        try{
            fs.readdir("./komutlar",(err,files) => {
                if(err) throw err;
                files.forEach(f => {
                    const cmd = require(`../komutlar/${f}`);
                 
                    if(interaction.commandName.toLowerCase() === cmd.name.toLowerCase())
                    {
                        return cmd.run(client,interaction);
                    }
            })
            })
        }
        catch(err){
            console.log(err);
        }
    }
}