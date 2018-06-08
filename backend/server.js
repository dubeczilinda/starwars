const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream');
const helmet = require('helmet');
const cors = require('cors');

const db = require('./config/database.js');
const Starwars = require('./models/starwars');
const starwarsRouter = require('./route/starwars.route');

const logDirectory = path.join(__dirname, 'log');
const port = process.env.PORT || 8080;
const app = express();

// Logging
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
const accessLogStream = rfs('access.log', {
  interval: '1d',
  path: logDirectory,
});
app.use(morgan('combined', {
  stream: accessLogStream,
  skip: (req, res) => res.statusCode < 400,
}));

// TODO: Add helmet
app.use(helmet());

// Body Parse middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

// TODO: Connect to MongoDB
mongoose.connect(db.uri, db.options)
  .then(() => {
    console.log('MongoDB connected.');
  })
  .catch((err) => {
    console.error(`MongoDB error.:${err}`);
  });

// TODO: Enable cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'lazyUpdate, normalizedNames, headers, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE');
    return res.status(200).json({});
  }
  return next();
});

// TODO: Use Starwars router
app.use('/starwars/', starwarsRouter);

// Start server
app.listen(port);
