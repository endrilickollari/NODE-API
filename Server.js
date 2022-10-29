const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

const route = require('../NODE-API/src/routes/Routes');
route(app);

app.listen(8080, () => {
    console.log(`Server is listening on port 4000`);
})
