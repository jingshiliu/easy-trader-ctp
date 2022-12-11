const finnhubClient = require('../finnhub')


async function getNews(req, res){
    const newsType = req.body.newsType || 'general'
    const amount = req.body.amount || 30

    finnhubClient.marketNews(newsType, {}, (err, data, response) => {
        if (err)
            console.log(err)
        res.json(data.slice(0, amount))
    })
}

module.exports = {
    getNews,
}