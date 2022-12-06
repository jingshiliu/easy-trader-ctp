const express = require('express')
const app = express()

const UserStockRouter = require('./routes/UserStockRouter')
const StockRouter = require('./routes/StockRouter')

const port = process.env.PORT || 8001

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/userstock', UserStockRouter)

app.use('/stock', StockRouter)

app.listen(port, ()=>{
    console.log(`Running on ${port}`)
})