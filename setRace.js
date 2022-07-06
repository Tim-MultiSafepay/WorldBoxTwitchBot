function setRace(tags, channel, client, race) {
    var request = require('request');

    request.post(
        process.env.URL + '/api/slaves/set/race',
        { json: { twitch: tags, race: race} },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                client.say(channel, tags.username + ' ' + body);
            }
        }
    );
}

module.exports = {
    checkCmd: function(msg, tags, channel, client, args) {
        if (msg === 'set-race') {
            const races = [
                "human",
                "elf",
                "orc",
                "dwarf",
            ];

            if (!races.includes(args[0]))
                client.say(channel, tags.username+ " Please choose an existing race!");

            setRace(tags, channel, client, args[0]);
        }
    }
};