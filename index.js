// const { response } = require('express');
const express = require('express');
const apiroute = require('./routes/api');
const authroute = require('./routes/auth');
const app = express();
const Auth = require('./app/middleware/auth');
require('dotenv').config();

app.use(express.json());
app.use('/api',Auth.verifyToken,apiroute);
app.use('/auth',authroute);

app.listen(3000,() => console.log('App running on port 3000'));