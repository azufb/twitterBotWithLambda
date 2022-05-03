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
    const tweetText = {status: `テスト投稿 ${date}`}

    client.post('statuses/update', tweetText, function(error, tweet, response) {
        if (error) throw error;
        console.log(tweet);
        console.log(response);
    });
}