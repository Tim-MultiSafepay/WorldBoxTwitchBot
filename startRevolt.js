function store(tags, channel, client) {
    var request = require('request');

    request.post(
        process.env.URL + '/api/slaves/revolt/store',
        { json: { twitch: tags } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                client.say(channel, tags.username + ' ' +body);
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg, tags, channel, client) {
        let command = msg.toLowerCase(), found = false;

        switch(command) {
            case 'revolt':
                found = true;
                store(tags, channel, client);
                break;
        }

        return found;
    }
};