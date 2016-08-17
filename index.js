'use strict';

var traverse = require('traverse');
var express = require('express');
var moment = require('moment');
var BootBot = require('bootbot');
var fetch = require('node-fetch');
var CronJob = require('cron').CronJob;

var Config = require('./config');
var Strings = require('./strings');

var port = process.env.PORT || 5000;
var app = express();
const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC';

var sayy = function (language, obj) {
    var result = traverse(obj).map(function (item) {
        if (this.key === language) {
            this.parent.update(item);
        }
    });
    return result;
};

const bot = new BootBot({
    accessToken: Config.FB_PAGE_TOKEN,
    verifyToken: Config.FB_VERIFY_TOKEN,
    appSecret: Config.FB_APP_SECRET
});

bot.setGetStartedButton((payload, chat) => {
    chat.getUserProfile().then((user) => {
        var language = user.locale.substring(0, 2).toLowerCase();
        // console.log(`Language: ${language}`);
        var questionBtn0 = `${sayy(`${language}`, Strings.words.first_question_btn)[0]}`;
        var questionBtn1 = `${sayy(`${language}`, Strings.words.first_question_btn)[1]}`;
        //console.log(`Button0: ${testButton0}`);
        //console.log(`Button1: ${testButton1}`);
        //console.log(`Buttons: ${testButton[0]} ${testButton[1]}`);
        //chat.say(`${sayy(`${language}`, Strings.words.greetings)}, ${user.first_name} !. ${sayy(`${language}`, Strings.words.welcome)}`, { typing: true }, { quickReplies: ['Mexican', ':()'] });
        chat.say({
            text: `${sayy(`${language}`, Strings.words.greetings)}, ${user.first_name} !.${sayy(`${language}`, Strings.words.welcome)}`,
            quickReplies: [`${testButton0}`, `${testButton1}`] //I had to use temp var coz it isn't working if I put all the stuff directly.'
        });
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

bot.hear(['hi'], (payload, chat) => {
    chat.getUserProfile().then((user) => {
        chat.say(`Hello, ${user.first_name} !`, { typing: true });
    });
});

bot.hear(['hello', /hey( there)?/i], (payload, chat) => {
    chat.getUserProfile().then((user) => {
        chat.say(`Hello, ${user.first_name} !.You are a ${user.gender}, locale: ${user.locale} and your timezone is: ${user.timezone}`, { typing: true });
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

bot.hear('baby', (payload, chat) => {
    chat.say({
        attachment: 'image',
        url: 'res/images/pregnancy-week-7.jpg',
        typing: true
    });
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