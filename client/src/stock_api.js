const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cdaaobqad3i97v8jfvagcdaaobqad3i97v8jfvb0"
const finnhubClient = new finnhub.DefaultApi()

const HOURS = 24
const DAYS = 100

function getTimestampInSeconds () {
    return Math.floor(Date.now() / 1000)
}

function getTimeInterval(start, end){
    if(!start && !end){
        let until = getTimestampInSeconds()
        let from = until - DAYS * HOURS * 3600
        return {from, until}
    }
}

export {finnhubClient, getTimeInterval}