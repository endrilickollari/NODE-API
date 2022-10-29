const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.json({message: "Welcome to Node-Express API"});
});

require('./src/routes/Routes')(app);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port: ${process.env.PORT}`);
})
