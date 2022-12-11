const {UserStock} = require('../models')


/**
 * add quantity to the stockSymbol of that userId,
 * if already exist, will increase the quantity by the amount
 * otherwise, create a Record with data received
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function addNewUserStock(req, res){
    const {userId, stockSymbol, quantity} = req.body
    console.log(req.body)
    if(!userId || !stockSymbol || !quantity){
        res.json({status: 400})
        return
    }

    // check if userId-stockSymbol exist
    let record = await UserStock.findOne({where: {userId, stockSymbol}})
    // update quantity if exist
    if(record){
        let oldQuantity = record.quantity
        record.quantity += Number(quantity);
        await record.save()
        res.json({
            status: 200,
            message: `Record already exist, increasing quantity of ${record.stockSymbol} from ${oldQuantity} to ${record.quantity}`
        })
        return;
    }

    // create new record if not exist
    await UserStock.create({
        userId,
        stockSymbol,
        quantity
    })
    res.json({message: `Successfully added new stock to userId ${userId}`})

    const data = await UserStock.findAll()
    data.forEach(d =>{
        let {userId, stockSymbol, quantity} = d
        console.log(userId, stockSymbol, quantity)
    })
}

async function removeStock(req, res){
    const {userId, stockSymbol, quantity} = req.body

    if(!userId || !stockSymbol || !quantity){
        res.json({status: 400})
        return
    }

    let record = await UserStock.findOne({where: {userId, stockSymbol}})
    if(!record){
        res.json({message: 'Record does not exist, try addStock instead'})
    }

    let oldQuantity = record.quantity
    if(oldQuantity < quantity){
        record.quantity = 0
        await record.save()
        res.json({status: 200, message: `Quantity to be removed more than the user holds, now user hold no Stock:  ${stockSymbol} of userId ${userId}  holded ${oldQuantity}, now ${0}`})
        return
    }

    record.quantity -= quantity
    await record.save()
    res.json({status: 200, message: `Successfully removed stock ${stockSymbol} of userId ${userId} from ${oldQuantity} to ${record.quantity}`})
}


async function removeAllStock(req, res){
    const {userId, stockSymbol} = req.body

    if(!userId || !stockSymbol){
        res.json({status: 400})
        return
    }

    let record = await UserStock.findOne({where: {userId, stockSymbol}})
    if(!record){
        res.json({message: 'Record does not exist, try addStock instead'})
        return
    }

    let oldQuantity = record.quantity
    record.quantity = 0
    await record.save()
    res.json({message: `Successfully removed stock ${stockSymbol} of userId ${userId} from ${oldQuantity} to ${record.quantity}`})
}


async function updateUserStock(req, res){
    const {userId, stockSymbol, operation, changeQuantity} = req.body

    if(!userId || !stockSymbol || !changeQuantity){
        res.json({status: 400})
        return
    }

    const userStockRecord = await UserStock.findOne({where: {userId, stockSymbol}})

    let newQuantity;
    let oldQuantity = userStockRecord.quantity;
    if(operation === 'increase')
        newQuantity = oldQuantity + changeQuantity
    else if(operation === 'decrease')
        newQuantity = oldQuantity - changeQuantity

    console.log(newQuantity)
    userStockRecord.quantity = newQuantity
    await userStockRecord.save()

    res.json({message: `Successfully updated stock quantity from ${oldQuantity} to ${newQuantity} for userId ${userId} and stock ${stockSymbol}`, status: 201})
}


async function getAllStocks(req, res){
    const {userId} = req.body

    if(userId === undefined){
        res.json({status: 400})
        return
    }

    const records = await UserStock.findAll({where:{userId}})
    const data = []

    if(!records){
        res.json({
            message: `No stock purchased by USER ${userId}`
        })
        return
    }

    for (const record of records) {
        if(record.quantity === 0)
            continue
        data.push({
            stockSymbol: record.stockSymbol,
            quantity: record.quantity
        })
    }
    res.json({
        message: 'Success',
        data,
    })
}

async function getOneStock(req, res){
    const {userId, stockSymbol} = req.body

    if(!userId || !stockSymbol){
        res.json({status: 400})
        return
    }

    const record = await UserStock.findOne({where:{userId, stockSymbol}})

    if(!record){
        res.json({
            message: `USER ${userId} did not purchased ${stockSymbol}`
        })
    }else{
        res.json({
            message: 'Success',
            data: {
                stockSymbol: record.stockSymbol,
                quantity: record.quantity
            }
        })
    }
}


module.exports = {
    addNewUserStock,
    updateUserStock,
    removeStock,
    getAllStocks,
    getOneStock,
    removeAllStock,
}