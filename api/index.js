const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
dotenv.config();
const port = 5000;
const app = express();
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.get('/hello', (req, res) => {
    return res.status(200).json({ message: 'Hello' });
});
app.post('/hi', (req, res, next) => {
    console.log(req.body);
    console.log(req.headers);
    return res.status(200).json({ message: 'Hi hi!' });
});
app.get('*', (req, res) => {
    return res.status(404).json({ message: 'Route not found' });
});
app.listen(port, () =>
    console.log(`Server listening on http://localhost:${port}`),
);
