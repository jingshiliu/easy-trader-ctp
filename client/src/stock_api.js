const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cdaaobqad3i97v8jfvagcdaaobqad3i97v8jfvb0"
const finnhubClient = new finnhub.DefaultApi()

const HOURS = 24
const DAYS = 100

function getTimestampInSeconds () {
    return Math.floor(Date.now() / 1000)
}

/**
 *
 * @param start : number of days before today
 * @param end : amount of days before today
 * @returns {{from: number, until: number}}
 */
function getTimeInterval(start=DAYS, end=0){
    let until = getTimestampInSeconds() - end * HOURS * 3600
    let from = until - start * HOURS * 3600
    return {from, until}
}

export {finnhubClient, getTimeInterval}