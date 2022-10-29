exports.getApiKey = function (req, res) {
    try {
        res.send({
            ApiKey: process.env.API_KEY
        })
    } catch (e) {
        res.send({
            Error: e.errorText
        })
    }
}