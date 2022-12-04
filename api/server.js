const express = require('express')
const app = express()

const UserStockRouter = require('./routes/UserStockRouter')
const port = process.env.PORT || 8001

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/user-stock', UserStockRouter)

app.listen(port, ()=>{
    console.log(`Running on ${port}`)
})