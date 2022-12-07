const NewsController = require('../controllers/NewsController')

const router = require('express').Router()

router.get('/', NewsController.getNews)

module.exports = router