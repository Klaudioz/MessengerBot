'use strict';

var express = require('express');
var moment = require('moment');
const BootBot = require('bootbot');
const fetch = require('node-fetch');
var Config = require('./config')
var CronJob = require('cron').CronJob;
var port = process.env.PORT || 5000;
var app = express();
const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC';

const bot = new BootBot({
    accessToken: Config.FB_PAGE_TOKEN,
    verifyToken: Config.FB_VERIFY_TOKEN,
    appSecret: Config.FB_APP_SECRET
});

bot.setGetStartedButton((payload, chat) => {
  chat.getUserProfile().then((user) => {
        if(user.gender==='male'){
            chat.say(`Hello, ${user.first_name} !. Futuro padre`, { typing: true });
        }
        else{
            chat.say('Hello, ${user.first_name} ! Futura madre', { typing: true });
        }
    });
});

// bot.on('message', (payload, chat) => {
//     new CronJob('0 * * * * *', function () {
//         chat.say('Cron message every minute', { typing: true });
//     }, null, true, 'America/Los_Angeles');
// });

bot.on('attachment', (payload, chat) => {
    // Reply to the user
    chat.say('I am sorry. I cant receive any attachment yet');
});

bot.hear(['test'], (payload, chat) => {
        chat.say(`1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n1234567890\n`);
});

bot.hear(['hi'], (payload, chat) => {
    chat.getUserProfile().then((user) => {
        chat.say(`Hello, ${user.first_name} !`, { typing: true });
    });
});

bot.hear(['hello', /hey( there)?/i], (payload, chat) => {
    chat.getUserProfile().then((user) => {
        chat.say(`Hello, ${user.first_name} !.You are a ${user.gender} and your timezone is: ${user.timezone}`, { typing: true });
    });
});

bot.hear(['food', 'hungry'], (payload, chat) => {
    // Send a text message with quick replies
    chat.say({
        text: 'What do you want to eat today?',
        quickReplies: ['Mexican', 'Italian', 'American', 'Argentine'],
        typing: true
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
    chat.say({
        attachment: 'image',
        url: 'http://2.bp.blogspot.com/-f3gTW-FCwhs/UHvNKJJzEnI/AAAAAAAADsk/MIZL9pUz9eo/s1600/doraemon+comiendo+dorayakis.gif',
        typing:true
    });
    chat.say(`xD`);
});

bot.hear(/gif (.*)/i, (payload, chat, data) => {
    const query = data.match[1];
    chat.say('Searching a good gif ..');
    fetch(GIPHY_URL + query)
        .then(res => res.json())
        .then(json => {
            chat.say({
                attachment: 'image',
                url: json.data[0].images.fixed_height.url
            });
        })
});

bot.start(port || 5000); //fix heroku problem 60 seconds