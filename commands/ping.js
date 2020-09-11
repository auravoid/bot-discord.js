module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: 'Ping!',
    execute: async (message) => {
        message.channel.send('Pinged!')
    },
};