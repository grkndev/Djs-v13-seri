const { Client } = require("discord.js")
const reg = require("./reg_cmd")
/**
 * 
 * @param {Client} client 
 */
module.exports = client => {
    client.guilds.cache.forEach(async g => {
        const cmd = (await g.commands.fetch()) || client.commands;
        if (cmd.size != client.commands.size)
            reg(g);
    })
}