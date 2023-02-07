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
    console.log('session')
    if(req.path === '/firebaseVerifyToken') {
        next()
        return
    }


    const sessionId = req.cookies.sessionId
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
    console.log(req)
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVhNTA5ZjAxOWY3MGQ3NzlkODBmMTUyZDFhNWQzMzgxMWFiN2NlZjciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSmluZ3NoaSBMaXUiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUVkRlRwNEVhb3c4dDRLSGNwLUtvSU5BYjZYR1pUMDl3Yjh4V0JnRldsRVM9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY3RwLWVhc3l0cmFkZXIiLCJhdWQiOiJjdHAtZWFzeXRyYWRlciIsImF1dGhfdGltZSI6MTY3NTczNTUyMSwidXNlcl9pZCI6IkdwRVhKYWFJTWJSQTc5aFZxMFJwSWlpVHVlVDIiLCJzdWIiOiJHcEVYSmFhSU1iUkE3OWhWcTBScElpaVR1ZVQyIiwiaWF0IjoxNjc1NzM1NTIxLCJleHAiOjE2NzU3MzkxMjEsImVtYWlsIjoiZWx2aXNqaW5nc2hpQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTE0NDgyODkxMjI2NzgyNjQ0MjE4Il0sImVtYWlsIjpbImVsdmlzamluZ3NoaUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.RpKFClhCp4TFUUqwnXQDj0-OYRcjj48EhQ9WxqCS7fC_VEhT35np1S-uWaJE4arbYY_oaOFFcl544Ew4r2FODLcULWCTH-UblKhXfScA6iIieG__ubc8bj8RTOVvt4exKkfY6PH3ZZ-z3Ee5JsFGbBBqSmzr4A-j2w0sa29AneqECD3y3yWm3dlJbF5iKiktNuDZ7ThRiVxzDJEq1EtOJNZSq6GjBAsDaTErxIh1qk04fD1kTKSRZOjgO9a9xG9tw7u4qTMBlza1Dnp0lHZHL3DOu8cePy95u-Sjvw4QuvOTgnRo6UeIvSosJb91E2fzWqZiR3JExwpsubNE3i4bXQ'

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

