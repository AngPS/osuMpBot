const fetch = require('node-fetch')
const Discord = require('discord.js')

module.exports = {
    name: 'ytt',
    description: 'ytt',
    async execute(message, args){
        message.client.api.channels(message.channel.id).invites.post({
            data: {
              "max_age": 604800,
              "max_uses": 0,
              "target_application_id": "755600276941176913",
              "target_type":  2,
              "temporary": false
            }})
            .then(inv => new Discord.Invite(message.client, inv))
            .then(inv => message.channel.send(inv.url));
    }
}