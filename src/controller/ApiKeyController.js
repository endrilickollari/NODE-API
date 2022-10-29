const dotenv = require('dotenv');
dotenv.config({
    path: __dirname + '/.env'
});

exports.getApiKey = function(req, res) {
    res.send({
        ApiKey: process.env['API_KEY']
    })
}