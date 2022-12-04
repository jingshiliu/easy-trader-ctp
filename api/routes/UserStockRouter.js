const UserStockController = require('../controllers/UserStockController')

const router = require('express').Router()

router.post('/stock/add', UserStockController.addNewUserStock)

router.post('/stock/update', UserStockController.updateUserStock)

router.post('/stock/remove', UserStockController.removeStock)

router.post('/stock/getAll', UserStockController.getAllStocks)

router.post('/stock/getOne', UserStockController.getOneStock)

module.exports = router