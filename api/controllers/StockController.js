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


async function getStockCandles(req, res){
    const {stockSymbols, start, end} = req.query
    const {from, until} = getTimeInterval()
    let START = start || from
    let END = end || until

    const candles = []

    for (const stockSymbol of stockSymbols) {
        finnhubClient.stockCandles(stockSymbol, 'D', START, END, (err, data, response)=>{
            candles.push({
                stockSymbol,
                candle: data['c']
            })

            if(candles.length === stockSymbols.length){
                res.json({
                    message: 'Success',
                    candles,
                })
            }
        })
    }
}


async function quote(req, res){
    const {stockSymbol} = req.query

    finnhubClient.quote(stockSymbol, (err, data, response)=>{
        res.json({
            message: 'Success',
            stockSymbol,
            price: data['c']
        })
    })
}


module.exports = {
    quote,
    getStockCandles
}