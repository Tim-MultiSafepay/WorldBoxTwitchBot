require('dotenv').config();

function buyEvent(tags, channel, client, event) {
    var request = require('request');

    request.post(
        process.env.URL + '/api/slaves/event/cmd/store',
        { json: { twitch: tags, event: event, amount: 1} },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                client.say(channel, tags.username + ' ' + body);
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg, tags, channel, client, args) {
        if (msg === 'spawn') {
            const events = [
                "meteor",
                "lightning",
                "earthquake",
                "rain",
                "tornado",
                "mad-thoughts",
                "evil-mage",
                "greg",
                "necromancer"
            ];
            if (!events.includes(args[0])) return client.say(channel, 'Event doesnt exist check screen');

            buyEvent(tags, channel, client, args[0]);
        }
    }
};