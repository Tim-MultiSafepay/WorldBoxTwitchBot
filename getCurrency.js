function get(tags, channel, client) {
    var request = require('request');

    request.get(
        process.env.URL + '/api/slaves/currency/get',
        { json: { twitch: tags } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                client.say(channel, tags.username + " currency amount is: **" + body + "**");
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg, tags, channel, client) {
        if (msg === '!currency') {
            get(tags, channel, client);
        }
    }
};