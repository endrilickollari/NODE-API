module.exports = function (app) {
    const apiKey= require('../controller/ApiKeyController');
    app.route('/getApiKey').get(apiKey.getApiKey);
}