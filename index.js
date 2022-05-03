const Twitter = require('twitter');
//require("dotenv").config();

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

exports.handler = () => {
    let date = new Date().toLocaleString('ja-JP');
    const text = '今日もお疲れ様でした〜😆'
    const tweetText = { status: `${text}\r\n${date}` }

    client.post('statuses/update', tweetText, (error, tweet, response) => {
        if (error) throw error;
        console.log(tweet);
        console.log(response);
    });
}