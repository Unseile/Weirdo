import express from 'express';
import createError from 'http-errors';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

import mongoose from 'mongoose';

await mongoose.connect(
  process.env.DATABASE_URL ?? 'mongodb+srv://leahaeberli03_db_user:xZ4jTJbqsylS3Yh0@cluster0.wdt6ec1.mongodb.net'
);

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to the error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.status(err.status ?? 500);
  res.send({ message: err.message });
});

export default app;
