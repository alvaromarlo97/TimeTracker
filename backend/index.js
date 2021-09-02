const express = require('express');
require('dotenv').config();
const debug = require('debug')('server');
const morgan = require('morgan');
const cors = require('cors');
const passportConfig = require('./src/config/passportConfig');

require('./src/config/ddbb.config');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
passportConfig(server);

const activityRouter = require('./src/routes/activityRouter');
const userRouter = require('./src/routes/usersRouter');
const authRouter = require('./src/routes/authRouter');

server.use('/api/activity', activityRouter);
server.use('/api/user', userRouter);
server.use('/', authRouter);

server.listen(
  port,
  () => debug(`Server is running on ${`http://localhost:${port}`}`),
);
