'use strict';

const BootBot = require('bootbot');
var Config = require('./config')
var port = process.env.PORT || 5000;

const bot = new BootBot({
  accessToken: Config.FB_PAGE_TOKEN,
  verifyToken: Config.FB_VERIFY_TOKEN,
  appSecret: Config.FB_APP_SECRET
});

chat.say({
    text: 'Favorite color?',
    buttons: [
        { type: 'postback', title: 'Red', payload: 'FAVORITE_RED' },
        { type: 'postback', title: 'Blue', payload: 'FAVORITE_BLUE' },
        { type: 'postback', title: 'Green', payload: 'FAVORITE_GREEN' }
    ]
});

bot.on('attachment', (payload, chat) => {
    // Reply to the user
    chat.say('I am sorry. I cant receive any attachment yet');
});

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
    // Send a text message followed by another text message that contains a typing indicator
    chat.getUserProfile().then((user) => {
    chat.say(`Hello, ${user.first_name} !`);
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

bot.start(port || 5000);