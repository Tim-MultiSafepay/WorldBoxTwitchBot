function addEquipment(tags, channel, client, material, type) {
    var request = require('request');

    request.post(
        process.env.URL + '/api/slaves/add/equipment',
        { json: { twitch: tags, material: material, equipment: type} },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                client.say(channel, body);
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg, tags, channel, client, args) {
        if (msg === 'buy-boots') {
            checkArgs(args, client, channel)
            addEquipment(tags, channel, client, args[0], "boots");
        }
        //if (msg === 'buy-ring') {
        //    checkArgs(args, client, channel)
        //    addEquipment(tags, channel, client, args[0], "ring");
        //}
        if (msg === 'buy-amulet') {
            checkArgs(args, client, channel)
            addEquipment(tags, channel, client, args[0], "amulet");
        }
        if (msg === 'buy-helmet') {
            checkArgs(args, client, channel)
            addEquipment(tags, channel, client, args[0], "helmet");
        }
        if (msg === 'buy-armor') {
            checkArgs(args, client, channel)
            addEquipment(tags, channel, client, args[0], "bodyarmor");
        }
    }
};

function checkArgs(args, client, channel) {
    const materials = [
        "leather",
        "copper",
        "bronze",
        "silver",
        "iron",
        "steel",
        "mythril",
        "adamantine",
    ];
    if (!materials.includes(args[0])) return client.say(channel, 'Material doesnt exist check screen');
}