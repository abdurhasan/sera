
const express = require('express');
const customerRouter = require('./routes/customers');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

// Index route
app.get('/', (req, res) => {
  res.sendStatus(200);
});

// Settings to parse body of a POST request
app.use(express.urlencoded({ extended: true }));

// Use a separate router for the paths following /customers
app.use('/customers', customerRouter);

module.exports = app;
