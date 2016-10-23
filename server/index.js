// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const config = require('../config');

// DB Setup
// mongoose.connect('mongodb://localhost:h2ouserdb/h2ouserdb');
mongoose.connect(config.mongodb);

// App Setup
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
// const server = http.createServer(app);
// server.listen(port);
app.listen(port);
console.log('Server listening on:', port);
