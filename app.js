const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Client, Intents, Collection } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})
const { token } = require("./ayarlar.json");
const fs = require("fs");
global.client = client;
client.commands = (global.commands = []);
fs.readdir("./komutlar/", (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./komutlar/${file}`);

    client.commands.push({
      name: props.name.toLowerCase(),
      description: props.description,
      options: props.options,
      dm_permission: props.dm_permission,
      type: 1

    })
    console.log(`👌 Slash Komut Yüklendi: ${props.name}`);
  });
});

fs.readdir("./menuCmd/", (err, files) => {
    if (err) throw err;
  
    files.forEach((file) => {
      if (!file.endsWith(".js")) return;
      let props = require(`./menuCmd/${file}`);
  
      client.commands.push({
        name: props.name.toLowerCase(),
        type: 2
  
      })
      console.log(`👌 Menü Komut Yüklendi: ${props.name}`);
    });
  });

fs.readdir("./events/", (_err, files) => {
    files.forEach((f) => {
        if (!f.endsWith(".js")) return;
        const e = require(`./events/${f}`);
        let eName = f.split(".")[0];
        console.log(`👌 Event yüklendi: ${eName}`);
        client.on(eName, (...args) => {
            e(client, ...args)
        });
    });
});

client.on("ready", async () => {

    const rest = new REST({ version: "9" }).setToken(token);
    try {
      await rest.put(Routes.applicationCommands(client.user.id), {
        body: client.commands,
      });
    } catch (error) {
      console.error(error);
    }
  });
client.login(token);