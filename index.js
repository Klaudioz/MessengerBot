'use strict';

const BootBot = require('bootbot');
const fetch = require('node-fetch');
var Config = require('./config')
var port = process.env.PORT || 5000;
const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC';

const bot = new BootBot({
    accessToken: Config.FB_PAGE_TOKEN,
    verifyToken: Config.FB_VERIFY_TOKEN,
    appSecret: Config.FB_APP_SECRET
});

bot.setGreetingText(`Hello. Thanks for use our service`);

bot.on('attachment', (payload, chat) => {
    // Reply to the user
    chat.say('I am sorry. I cant receive any attachment yet');
});

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
    chat.getUserProfile().then((user) => {
        chat.say(`Hello, ${user.first_name} !`, { typing: true });
    });
});

bot.hear(['food', 'hungry'], (payload, chat) => {
    // Send a text message with quick replies
    chat.say({
        text: 'What do you want to eat today?',
        quickReplies: ['Mexican', 'Italian', 'American', 'Argentine']
    });
});

bot.hear(['help'], (payload, chat) => {
    // Send a text message with buttons
    chat.say({
        text: 'What do you need help with?',
        buttons: [
            { type: 'postback', title: 'Settings', payload: 'HELP_SETTINGS' },
            { type: 'postback', title: 'FAQ', payload: 'HELP_FAQ' },
            { type: 'postback', title: 'Talk to a human', payload: 'HELP_HUMAN' }
        ]
    });
});

bot.hear('bandeshor', (payload, chat) => {
    // Send an attachment
    chat.say({
        attachment: 'image',
        url: 'http://2.bp.blogspot.com/-f3gTW-FCwhs/UHvNKJJzEnI/AAAAAAAADsk/MIZL9pUz9eo/s1600/doraemon+comiendo+dorayakis.gif'
    });
    chat.say(`xD`);
});

bot.hear(/gif (.*)/i, (payload, chat, data) => {
    const query = data.match[1];
    console.log(query);
    chat.say('Searching a good gif ..');
    fetch(GIPHY_URL + query)
        .then(res => res.json())
        .then(json => {
            chat.say({
                attachment: 'image',
                url: json.data[0].images.fixed_height.url
            }, {
                    typing: true
                });
        })
});

bot.start(port || 5000);