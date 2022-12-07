const UserStockController = require('../controllers/UserStockController')

const router = require('express').Router()

router.post('/add', UserStockController.addNewUserStock)

router.post('/update', UserStockController.updateUserStock)

router.delete('/remove', UserStockController.removeStock)

router.post('/removeAll', UserStockController.removeAllStock)

router.post('/getAll', UserStockController.getAllStocks)

router.post('/getOne', UserStockController.getOneStock)

module.exports = router