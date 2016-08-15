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
    console.log('The user said "hello", "hi", "hey", or "hey there"');
});

bot.start(5000);