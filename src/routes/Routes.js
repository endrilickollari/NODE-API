module.exports = (app) => {
    const apiKey= require('../controller/ApiKeyController');
    const router = require('express').Router();
    router.get('/news-api-key', apiKey.getApiKey);
    app.use('/api/keys', router);
}