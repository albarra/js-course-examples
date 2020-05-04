const redis = require("redis");
const subscriber = redis.createClient();


subscriber.subscribe('my-channel')
subscriber.on('message', (channel, message) => { 
    console.log('Message from channel [' + channel + '] and message [' + message + ']')
});