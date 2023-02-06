const admin = require('../config/firebase-config')

class Middleware{
    async decodeToken(req, res, next){
        const token = req.headers.authorization

        const decodedToken = await admin.auth().verifyIdToken(token)
        if(decodedToken){
            const uid = decodedToken.uid
            next()
        }

        res.json({message: 'Unauthorized'})
    }
}

module.exports = new Middleware()