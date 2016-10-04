'use strict';

var traverse = require('traverse');
//var express = require('express');
var moment = require('moment');
var BootBot = require('bootbot');
var fetch = require('node-fetch');
var chrono = require('chrono-node');
var DateDiff = require('date-diff');
var nodemon = require('nodemon');
var CronJob = require('cron').CronJob;

var Config = require('./config');
var Strings = require('./strings');

// var fs = require("fs");
// Get content from file
// var contents = fs.readFileSync("timezones.json");
// Define to JSON type
// var jsonContent = JSON.parse(contents);
// Get Value from JSON

var port = process.env.PORT || 5000;
const GIPHY_URL = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=`;
var msgDateWeek, weeksNum, dueDateFormatted, language, hourCron, dayCron, minCron;

var fs = require("fs");
var file = process.env.CLOUD_DIR + "/" + "database.db";
var exists = fs.existsSync(file);

if (!exists) {
    console.log("Creating DB file.");
    fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

if (!exists) {
    db.run("CREATE TABLE data (id INTEGER PRIMARY KEY, day INTEGER, hour INTEGER, minute INTEGER, dueDateFormatted TEXT)");
}
var stmt_insert = "INSERT INTO data(id,day,hour,minute,dueDateFormatted) VALUES (?,?,?,?,?)"
var stmt_select = "SELECT day, hour, minute, dueDateFormatted FROM data WHERE id='"+aMessage.account;

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
        language = user.locale.substring(0, 2).toLowerCase();
        var questionBtn0 = `${sayy(`${language}`, Strings.words.first_question_btn)[0]}`;
        var questionBtn1 = `${sayy(`${language}`, Strings.words.first_question_btn)[1]}`;

        chat.say({
            text: `${sayy(`${language}`, Strings.words.greetings)}, ${user.first_name} !.${sayy(`${language}`, Strings.words.welcome)}`,
            quickReplies: [`${questionBtn0}`, `${questionBtn1}`]
        });
        bot.hear([`${questionBtn0}`], (payload, chat) => {
            chat.conversation((convo) => {
                convo.ask(`Tell me the day and hour you want to receive the notifications?`, (payload, convo) => {
                    const text = payload.message.text;
                    msgDateWeek = chrono.parseDate(text);
                    var msgDateWeekMoment = moment(msgDateWeek).subtract(user.timezone, 'h');
                    dayCron = msgDateWeekMoment.day();
                    console.log('day: ' + dayCron);
                    hourCron = msgDateWeekMoment.hour();
                    console.log('hour: ' + hourCron);
                    minCron = msgDateWeekMoment.minute();
                    console.log('minute: ' + minCron);
                    convo.say(``).then(() => {
                        convo.ask(`${sayy(`${language}`, Strings.words.asking_due_day)}`, (payload, convo) => {
                            const text = payload.message.text;
                            dueDateFormatted = chrono.parseDate(text);
                            console.log(dueDateFormatted);
                            console.log(Date.diff(dueDateFormatted, chrono.parseDate('Today')).days());
                            weeksNum = Math.floor(40 - Date.diff(dueDateFormatted, chrono.parseDate('Today')).weeks());
                            convo.say(`${sayy(`${language}`, Strings.words.your_week)} ${weeksNum}\n\n${sayy(`${language}`, Strings.words.weeks.baby1)[weeksNum]}`).then(() => {
                                convo.say(`${sayy(`${language}`, Strings.words.weeks.baby2)[weeksNum]}`).then(() => {
                                    chat.say({
                                        attachment: 'image',
                                        url: `${Strings.words.pictures.url[weeksNum]}`,
                                        typing: true
                                    }).then(() => {
                                        //new CronJob(`0 ${minCron} ${hourCron} * * ${dayCron}`, function () {
                                        new CronJob(`0 ${minCron} ${hourCron} * * *`, function () {
                                            console.log('CRON message');
                                            weeksNum = Math.floor(40 - Date.diff(dueDateFormatted, chrono.parseDate('Today')).weeks()); //recalculate week
                                            convo.say(`${sayy(`${language}`, Strings.words.your_week)} ${weeksNum}\n\n${sayy(`${language}`, Strings.words.weeks.baby1)[weeksNum]}`).then(() => {
                                                convo.say(`${sayy(`${language}`, Strings.words.weeks.baby2)[weeksNum]}`).then(() => {
                                                    chat.say({
                                                        attachment: 'image',
                                                        url: `${Strings.words.pictures.url[weeksNum]}`,
                                                    });
                                                });
                                            });
                                        }, null, true);
                                    });
                                });
                            });
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
                            chat.say({
                                attachment: 'image',
                                url: `${Strings.words.pictures.url[weeksNum]}`,
                                typing: true
                            })
                        });
                    });
                });
            });
        });
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

bot.hear(['now'], (payload, chat) => {
    chat.getUserProfile().then((user) => {
        var now = moment().utc(user.timezone);
        chat.say(`${now}`, { typing: true });
    });
});

bot.hear(['length', 'largo', 'tamaño'], (payload, chat) => {
    //console.log(dueDateFormatted);
    chat.say(`Length in week ${weeksNum} is: ${sayy(`${language}`, Strings.words.length)[weeksNum]}`);
});

bot.hear(['weight', 'peso'], (payload, chat) => {
    chat.say(`Length in week ${weeksNum} is: ${sayy(`${language}`, Strings.words.weight)[weeksNum]}`);
});

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

nodemon.on('restart', function () {
    chat.say('Restarting: ' + dueDateFormatted);
});

bot.start(port || 5000); //fix heroku problem 60 seconds