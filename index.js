require('dotenv').config();
const request = require("request");
const tmi = require('tmi.js');

const addSlave = require("./addSlave");
const setRace = require("./setRace");
const setFollow = require("./setFollow");
const addLevel = require("./addLevel");
const getCurrency = require("./getCurrency");
const addTrait = require("./addTrait");
const addEquipment = require("./addEquipment");
const setWar = require("./setWar");
const startRevolt = require("./startRevolt");
const buyEvent = require("./buyEvent");


const client = new tmi.Client({
    options: { debug: true },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: 'kjoebox',
        password: process.env.TWITCH_OAUTH_TOKEN
    },
    channels: ['kjoekjoe']
});

client.connect();
client.on('message', (channel, tags, message, self) => {
    if(self || !message.startsWith('!')) {
        return;
    }

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    console.log(tags);
    console.log(command);
    console.log(args)

    if(self) return;

    addSlave.checkCmd(command, tags, channel, client)
    //setFollow.checkCmd(command, tags, channel, client)
    getCurrency.checkCmd(command, tags, channel, client)
    startRevolt.checkCmd(command, tags, channel, client)

    addLevel.checkCmd(command, tags, channel, client, args)
    setRace.checkCmd(command, tags, channel, client, args)
    addTrait.checkCmd(command, tags, channel, client, args)
    addEquipment.checkCmd(command, tags, channel, client, args)
    setWar.checkCmd(command, tags, channel, client, args)
    buyEvent.checkCmd(command, tags, channel, client, args)


});