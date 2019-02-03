import express from 'express'
import morgan from 'morgan'

import signUp from './handlers/signUp'
import signIn from './handlers/signIn'

const app  = express();
app.use(express.json());

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.post('/api/v1/sign_up', function (req, res) {
  res.send(signUp.handle(req.body));
});

app.post('/api/v1/sign_in', function (req, res) {
  res.send(signIn.handle(req.body));
});


app.get('/ping', (req, res) => {
  res.send('pong')
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});