import express from 'express'
import morgan from 'morgan'

import db from './handlers/db'
import signUp from './handlers/signUp'
import signIn from './handlers/signIn'
import home from './handlers/home'
import {create} from './handlers/boxes'

const app  = express();
app.use(express.json());

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.post('/api/v1/sign_up', function (req, res) {
  res.send(signUp(req.body));
});

app.post('/api/v1/sign_in', function (req, res) {
  res.send(signIn(req.body));
});

app.get('/api/v1/home', function (req, res) {
  const user = getUser(req);

  if(user) {
    res.send(home(req.body, user))
  } else {
    res.send(401)
  }
});

app.post('/api/v1/boxes', function (req, res) {
  const user = getUser(req);
  res.send(create(req, user))
});

app.get('/ping', (req, res) => {
  res.send('pong')
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function getUser(req) {
  let user_email = req.headers.authorization.split(' ')[1];
  return db.users[user_email];
}