const UserStockController = require('../controllers/UserStockController')

const router = require('express').Router()

router.post('/add', UserStockController.addNewUserStock)

router.post('/update', UserStockController.updateUserStock)

router.delete('/remove', UserStockController.removeStock)

router.get('/getAll', UserStockController.getAllStocks)

router.get('/getOne', UserStockController.getOneStock)

module.exports = router