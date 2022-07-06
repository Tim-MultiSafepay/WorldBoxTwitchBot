function addTrait(tags, channel, client, skill) {
    var request = require('request');

    request.post(
        process.env.URL + '/api/slaves/add/trait',
        { json: { twitch: tags, trait: skill} },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                client.say(channel, tags.username + ' ' +body);
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg, tags, channel, client, args) {
        if (msg === 'buy-trait') {
            const levels = [
                "agile",
                "ambitious",
                "attractive",
                "blessed",
                "boat",
                "content",
                "deceitful",
                "eagle_eyed",
                "energized",
                "fast",
                "genius",
                "giant",
                "honest",
                "immune",
                "kingslayer",
                "lucky",
                "mageslayer",
                "dragonslayer",
                "miner",
                "pacifist",
                "pyromaniac",
                "regeneration",
                "savage",
                "skin_burns",
                "strong",
                "tough",
                "veteran",
                "weightless",
                "wise",
                "plague",
                "charged",
                "immortal",
            ];
            if (!levels.includes(args[0])) return client.say(channel, 'Traits doesnt exist check screen');
            addTrait(tags, channel, client, args[0])
        }
    }
};