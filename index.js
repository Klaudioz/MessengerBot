'use strict';

var traverse = require('traverse');
//var express = require('express');
var moment = require('moment');
var BootBot = require('bootbot');
var fetch = require('node-fetch');
var chrono = require('chrono-node');
var DateDiff = require('date-diff');
var CronJob = require('cron').CronJob;

var Config = require('./config');
var Strings = require('./strings');
//var tz = require('./timezones');
//var obj = JSON.parse(tz);

var fs = require("fs");
// Get content from file
var contents = fs.readFileSync("timezones.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);
// Get Value from JSON
// console.log("User Name:", jsonContent["-3"]);

var port = process.env.PORT || 5000;
const GIPHY_URL = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=`;
var msgDateWeek, weeksNum, dueDateFormatted;

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

        const askWeeklyMsg = (convo) => {
            convo.ask(`Tell me the day and hour you want to receive the notifications?`, (payload, convo) => {
                const text = payload.message.text;
                msgDateWeek = chrono.parseDate(text);
            });
        };

        var questionBtn0 = `${sayy(`${language}`, Strings.words.first_question_btn)[0]}`;
        var questionBtn1 = `${sayy(`${language}`, Strings.words.first_question_btn)[1]}`;
        chat.say({
            text: `${sayy(`${language}`, Strings.words.greetings)}, ${user.first_name} !.${sayy(`${language}`, Strings.words.welcome)}`,
            quickReplies: [`${questionBtn0}`, `${questionBtn1}`]
        })
        bot.hear([`${questionBtn0}`], (payload, chat) => {
            chat.conversation((convo) => {
                convo.ask(`${sayy(`${language}`, Strings.words.asking_due_day)}`, (payload, convo) => {
                    const text = payload.message.text;
                    dueDateFormatted = chrono.parseDate(text);
                    //convo.set('dueDateFormatted', dueDateFormatted);
                    console.log(dueDateFormatted);
                    console.log(Date.diff(dueDateFormatted, chrono.parseDate('Today')).days());
                    weeksNum = Math.floor(40 - Date.diff(dueDateFormatted, chrono.parseDate('Today')).weeks());
                    convo.say(`${sayy(`${language}`, Strings.words.your_week)} ${weeksNum}\n\n${sayy(`${language}`, Strings.words.weeks.baby1)[weeksNum]}`).then(() => {
                        convo.say(`${sayy(`${language}`, Strings.words.weeks.baby2)[weeksNum]}`).then(() => {
                            //convo.say(`${sayy(`${language}`, Strings.words.weeks.mom)[weeksNum]}`).then(() => {
                            chat.say({
                                attachment: 'image',
                                url: `${Strings.words.pictures.url[weeksNum]}`, //`${Strings.words.pictures.url[weeksNum]}`
                                typing: true
                            })
                            //});
                        });
                    });
                });
            });
        });
        bot.hear([`${questionBtn1}`], (payload, chat) => {
            chat.conversation((convo) => {
                convo.ask(`${sayy(`${language}`, Strings.words.asking_menstrual_day)}`, (payload, convo) => {
                    const text = payload.message.text;
                    dueDateFormatted = chrono.parseDate(text);
                    console.log(dueDateFormatted);
                    console.log((Date.diff(chrono.parseDate('Today'), dueDateFormatted)).days());
                    weeksNum = Math.floor(Date.weeksNum(chrono.parseDate('Today'), dueDateFormatted).weeks());
                    convo.say(`${sayy(`${language}`, Strings.words.your_week)} ${weeksNum}\n\n${sayy(`${language}`, Strings.words.weeks.baby1)[weeksNum]}`).then(() => {
                        convo.say(`${sayy(`${language}`, Strings.words.weeks.baby2)[weeksNum]}`).then(() => {
                            //convo.say(`${sayy(`${language}`, Strings.words.weeks.mom)[weeksNum]}`).then(() => {
                            chat.say({
                                attachment: 'image',
                                url: `${Strings.words.pictures.url[weeksNum]}`, //`${Strings.words.pictures.url[weeksNum]}`
                                typing: true
                            })
                            //});
                        });
                    });
                });
            });
        });
    });
});

bot.on('message', (payload, chat) => {
    chat.getUserProfile().then((user) => {
        new CronJob('0 * * * * *', function () {
            //chat.sendTextMessage('Cron message every minute');
            // console.log(`locale: ${user.timezone}`)
            //console.log(dueDateFormatted);
            //console.log(msgDateWeek);
        }, null, true, jsonContent[`${user.timezone}`]); //'America/Los_Angeles'
    });
});

bot.on('attachment', (payload, chat) => {
    // Reply to the user
    chat.say('I am sorry. I cant receive any attachment yet');
});

bot.hear(['hi'], (payload, chat) => {
    chat.getUserProfile().then((user) => {
        chat.say(`Hello, ${user.first_name} !`, { typing: true });
    });
});

bot.hear(['length'], (payload, chat) => {
    //chat.getUserProfile().then((user) => {
        console.log("1234");
        console.log(dueDateFormatted);
        chat.say(`Length in week ${weeksNum} is: ${sayy(`${language}`, Strings.words.length)[weeksNum]}`);
        //console.log(`${sayy(`${language}`, Strings.words.length)[weeksNum]}`);
        //console.log(Strings.words.size[25]);
        //console.log(Strings.words.size[weeksNum]);
        //console.log(Strings.words.size.en[25]);
    });
//});

bot.hear(['hello', /hey( there)?/i], (payload, chat) => {
    chat.getUserProfile().then((user) => {
        chat.say(`Hello, ${user.first_name} !.You are a ${user.gender}, locale: ${user.locale} and your timezone is: ${user.timezone}`, { typing: true });
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

bot.hear(/gif (.*)/i, (payload, chat, data) => {
    const query = data.match[1];
    chat.say('Searching for the perfect gif...');
    fetch(GIPHY_URL + query)
        .then(res => res.json())
        .then(json => {
            chat.say({
                attachment: 'image',
                url: json.data.image_url
            }, {
                    typing: true
                });
        });
});

bot.start(port || 5000); //fix heroku problem 60 seconds