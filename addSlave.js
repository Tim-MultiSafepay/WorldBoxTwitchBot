function addSlave(tags, channel, client) {
    client.say(channel, "Going to add " + tags.username + " in the world!")
    var request = require('request');

    request.post(
        process.env.URL + '/api/twitch/add/slave',
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
            case 'add':
                found = true;
                addSlave(tags, channel, client);
                break;
        }

        return found;
    }
};