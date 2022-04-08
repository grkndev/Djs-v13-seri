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
client.commands = new Collection();
fs.readdir("./komutlar/", (err, files) => {
    if (err) throw err;

    files.forEach((f) => {
        if (!f.endsWith(".js")) return;
        let p = require(`./komutlar/${f}`);
        client.commands.set(p.name, p);
        console.log(`✔ Komut eklendi: ${p.name}`);
    });
});

fs.readdir("./menuCmd/", (err, files) => {
    if (err) throw err;

    files.forEach((f) => {
        if (!f.endsWith(".js")) return;
        let p = require(`./menuCmd/${f}`);
        client.commands.set(p.name, p);
        console.log(`✔ Menü Komut eklendi: ${p.name}`);
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
client.login(token);