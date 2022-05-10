module.exports = async (client) => {
    client.user.setPresence({
        activities: [
            {
                name: "Gweep Creative",
                type: "STREAMING",
                url: "https://twitch.tv/gweepcreative"
            }
        ],
        status: "idle"
    });
    console.log(`${client.user.tag} Aktif!`);
}