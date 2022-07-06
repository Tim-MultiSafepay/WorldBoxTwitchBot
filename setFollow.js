function follow(tags, channel, client) {
    var request = require('request');

    request.post(
        process.env.URL + '/api/slaves/enable/follow',
        { json: { twitch: tags } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                client.say(channel, tags.username + ' ' + body);
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg, tags, channel, client) {
        if (msg === 'watch') {
            follow(tags, channel, client);
        }
    }
};