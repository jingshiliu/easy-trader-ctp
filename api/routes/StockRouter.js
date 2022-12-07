const StockController = require('../controllers/StockController')

const router = require('express').Router()

router.get('/quote', StockController.quote)

router.post('/candles', StockController.getStockCandles)

router.get('/candle', StockController.getStockCandle)

module.exports = router