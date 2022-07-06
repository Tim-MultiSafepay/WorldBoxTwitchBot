function setWar(tags, channel, client, player) {
    var request = require('request');

    request.post(
        process.env.URL + '/api/slaves/kingdom/war',
        { json: { twitch: tags, player: player, type: 'war'} },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                client.say(channel, tags.username + ' ' + body);
            }
        }
    );
}

function setPeace(tags, channel, client, player) {
    var request = require('request');

    request.post(
        process.env.URL + '/api/slaves/kingdom/peace',
        { json: { twitch: tags, player: player, type: 'peace'} },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                client.say(channel, tags.username + ' ' + body);
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg, tags, channel, client, args) {
        if (msg === 'set-war') {
            if (!args[0]) return client.say(channel, 'please @ a user');

            setWar(tags, channel, client, args[0]);
        }

        if (msg === 'set-peace') {
            if (!args[0]) return client.say(channel, 'please @ a user');

            setPeace(tags, channel, client, args[0]);
        }
    }
};