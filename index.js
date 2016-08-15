'use strict';

const BootBot = require('bootbot');
var Config = require('./config')
var port = process.env.PORT || 5000;

const bot = new BootBot({
  accessToken: Config.FB_PAGE_TOKEN,
  verifyToken: Config.FB_VERIFY_TOKEN,
  appSecret: Config.FB_APP_SECRET
});

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
    // Send a text message followed by another text message that contains a typing indicator
    chat.say('Hello, human friend!').then(() => {
        chat.say('How are you today?', { typing: true });
    });
});

bot.start(port || 5000);