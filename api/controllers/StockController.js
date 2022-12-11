const finnhubClient = require('../finnhub')
const e = require("express");

const HOURS = 24
const DAYS = 100
const GRAPH_LENGTH = 30

function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000)
}

/**
 *
 * @param start : number of days before today
 * @param end : amount of days before today
 * @returns {{from: number, until: number}}
 */
function getTimeInterval(start = DAYS, end = 0) {
    start = start || DAYS
    end = end || 0

    let until = getTimestampInSeconds() - end * HOURS * 3600
    let from = until - start * HOURS * 3600
    return {from, until}
}


async function getStockCandles(req, res) {
    let {stockSymbols, start, end} = req.body

    if(stockSymbols === undefined || stockSymbols.length === 0){
        res.json({status: 400})
        return
    }

    const {from, until} = getTimeInterval(start, end)

    const candles = []

    for (const stockSymbol of stockSymbols) {
        finnhubClient.stockCandles(stockSymbol, 'D', from, until, (err, data, response) => {
            console.log(data)
            try{
                if(! data || !data['c']) return;
            }catch (err){
                console.log(err)
                return
            }

            candles.push({
                stockSymbol,
                candle: data['c'].slice(-GRAPH_LENGTH, data['c'].length)
            })

            if (candles.length === stockSymbols.length) {
                res.json({
                    message: 'Success',
                    data: candles,
                })
            }
        })
    }
}

async function getStockCandle(req, res) {
    let {stockSymbol, start, end} = req.query

    const {from, until} = getTimeInterval(start, end)

    finnhubClient.stockCandles(stockSymbol, 'D', from, until, (err, data, response) => {
        res.json({
            candle: data['c'].slice(-GRAPH_LENGTH, data['c'].length)
        })
    })
}


async function quote(req, res) {
    const {stockSymbol} = req.query

    finnhubClient.quote(stockSymbol, (err, data, response) => {
        res.json({
            message: 'Success',
            stockSymbol,
            price: data['c']
        })
    })
}


module.exports = {
    quote,
    getStockCandles,
    getStockCandle,
}