import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';
import { registerValidation } from './validations/auth.js';
import UserModel from './models/User.js';
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js'

mongoose
  .connect(
    'mongodb+srv://max835902:b0kBDNykWOkoCkK2@cluster0.pxistf8.mongodb.net/blog1?retryWrites=true&w=majority',
  )
  .then(() => console.log('db ok'))
  .catch((err) => console.log('dv EEE', err));

const app = express();

app.use(express.json());

app.post('/auth/login', UserController.login);

app.post('/auth/register', registerValidation, UserController.register);

app.get('/auth/me',checkAuth, UserController.getMe)

app.listen(4444, (err) => {
  if (err) {
    return console.log('err111', err);
  }
  console.log('server ok');
});
