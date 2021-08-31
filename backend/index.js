const express = require('express');
require('dotenv').config();
const debug = require('debug')('server');
const morgan = require('morgan');
const cors = require('cors');

require('./src/config/ddbb.config');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.listen(
  port,
  () => debug(`Server is running on ${`http://localhost:${port}`}`),
);
