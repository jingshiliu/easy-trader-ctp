const admin = require('../config/firebase-config')
const crypto = require('crypto')

const sessions = {}

/**
 * a middleware that verifies sessionId
 * adding a userId attribute to 'req.body' if sessionId is valid
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function sessionValidator(req, res, next){
    if(req.path === '/firebaseVerifyToken') next()

    const sessionId = req.cookie.sessionId
    const session = sessions[sessionId]

    if(session.expiration > Date.now()){
        req.body.userId = session.userId
        next()
    }else{
        delete sessions[sessionId]
        res.json({message: 'Session expired'})
    }
}

async function firebaseVerifyToken(req, res){
    const token = req.headers.authorization

    const decodedToken = await admin.auth().verifyIdToken(token)
    if(decodedToken){
        const uid = decodedToken.uid
        const sessionId = generateSessionId()

        storeSession(sessionId, uid)

        res.cookie('sessionId', sessionId, {
            httpOnly: true
        })

        res.json({message: 'Token verified'})
    }
    else
        res.json({message: 'Unauthorized'})
}

function generateSessionId(){
    return crypto.randomBytes(64).toString('hex')
}

function storeSession(sessionId, uid){
    sessions[sessionId] = {
        userId: uid,
        expiration: Date.now() + 3600 * 1000 * 24
    }
}

module.exports = {
    sessionValidator,
    firebaseVerifyToken
}