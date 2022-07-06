function setLevel(tags, channel, client, skill) {
    var request = require('request');

    request.post(
        process.env.URL + '/api/slaves/add/level',
        { json: { twitch: tags, level: skill, amount: 1} },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                client.say(channel, tags.username + ' ' + body);
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg, tags, channel, client, args) {
        if (msg === 'buy-level') {
            const levels = [
                "health",
                "diplomacy",
                "warfare",
                "stewardship",
                "intelligence",
                "attack_speed",
                "accuracy",
                "speed",
                "crit",
                "armor",
            ];
            if (!levels.includes(args[0])) return client.say(channel, 'Level doesnt exist check screen');

            setLevel(tags, channel, client, args[0]);
        }
    }
};