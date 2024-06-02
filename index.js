import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';
import {registerValidation} from './validations/auth.js'

mongoose
  .connect(
    'mongodb+srv://max835902:b0kBDNykWOkoCkK2@cluster0.pxistf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => console.log('db ok'))
  .catch((err) => console.log('dv EEE', err));

const app = express();

app.use(express.json());


app.post('/auth/register',registerValidation, (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json(errors.array())
  }
  res.json({
    seccess: true,
  })
});


app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('server ok');
});
