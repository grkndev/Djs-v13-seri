const {Client,Intents} = require("discord.js");
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v10")
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})
const {token} = require("./ayarlar.json");
const fs = require("fs");
global.client = client;
client.commands = (global.commands = []);
fs.readdir("./komutlar/", (err, files) => {
    if(err) throw err;

    files.forEach((f) => {
        if(!f.endsWith(".js")) return;
        let p = require(`./komutlar/${f}`);

        client.commands.push({
            name:p.name.toLowerCase(),
            description:p.description,
            type:p.type,
            options:p.options,
        })
        console.log(`✔ Komut eklendi: ${p.name}`);
    });
});

fs.readdir("./menuCmd/", (err, files) => {
    if(err) throw err;

    files.forEach((f) => {
        if(!f.endsWith(".js")) return;
        let p = require(`./menuCmd/${f}`);

        client.commands.push({
            name:p.name.toLowerCase(),
            type:2,
        })
        console.log(`✔ Menü Komut eklendi: ${p.name}`);
    });
});

fs.readdir("./events/", (_err,files) => {
    files.forEach((f) => {
        if(!f.endsWith(".js"))return;
        const e = require(`./events/${f}`);
        let eName = f.split(".")[0];
        console.log(`👌 Event yüklendi: ${eName}`);
        client.on(eName, (...args) => {
            e(client, ...args)
        });
    });
});
client.on("ready", async () => {

    const rest = new REST({ version: "10" }).setToken(token);
  try {
    await rest.put(Routes.applicationGuildCommands(client.user.id,"949684848228986910"), {
      body: commands,
    });
  } catch (error) {
    console.error(error);
  }
});

client.login(token);