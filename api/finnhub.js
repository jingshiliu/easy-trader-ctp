const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cddeb7iad3iag7bhllngcddeb7iad3iag7bhllo0"
const finnhubClient = new finnhub.DefaultApi()



module.exports = finnhubClient