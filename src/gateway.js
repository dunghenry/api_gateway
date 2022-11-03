const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');
dotenv.config();
const port = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use('/', routes);
app.listen(port, () =>
    console.log(`Server listening on http://localhost:${port}`),
);
