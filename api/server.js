const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const {firebaseVerifyToken} = require('./Authenticator')

const UserStockRouter = require('./routes/UserStockRouter')
const StockRouter = require('./routes/StockRouter')
const NewsRouter = require('./routes/NewsRouter')

const port = process.env.PORT || 8001

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

app.use('/userstock', UserStockRouter)

app.use('/stock', StockRouter)

app.use('/news', NewsRouter)

app.post('/firebaseVerifyToken', firebaseVerifyToken)

app.listen(port, ()=>{
    console.log(`Running on ${port}`)
})