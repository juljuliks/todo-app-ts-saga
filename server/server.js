const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const todosRouter = require('./routes/todos.router');
const authRouter = require('./routes/auth.router');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: new Date('Dec 31, 2021'),
    httpOnly: true,
  },
};

const app = express();
app.use(session(sessionConfig));

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/todos', todosRouter);
app.use('/api', authRouter);

app.listen(5000, () => {
  console.log('server started');
});
