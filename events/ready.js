const chk_cmd = require("../utils/check_cmd.js");
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

    chk_cmd(client);
    console.log(`${client.user.tag} Aktif!`);
}