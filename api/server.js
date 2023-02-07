const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const {firebaseVerifyToken, sessionValidator} = require('./Authenticator')

const UserStockRouter = require('./routes/UserStockRouter')
const StockRouter = require('./routes/StockRouter')
const NewsRouter = require('./routes/NewsRouter')

const port = process.env.PORT || 8002

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use(sessionValidator)

app.use((req, res, next)=>{
    console.log(req.path)
    next()
})

app.use('/userstock', UserStockRouter)

app.use('/stock', StockRouter)

app.use('/news', NewsRouter)

app.post('/firebaseVerifyToken', firebaseVerifyToken)

app.listen(port, ()=>{
    console.log(`Running on ${port}`)
})