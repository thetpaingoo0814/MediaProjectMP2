require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const fileUpload = require('express-fileupload');

const mongoose = require('mongoose');
const res = require("express/lib/response");
mongoose.connect(process.env.DB_URL);

app.use(express.static('public'));
app.use(express.json({limit: '10mb'}));
app.use(fileUpload());

const userRouter = require('./routes/user_route');

app.use('/users', userRouter);

const {saveSingleFile,RDB} = require('./utils/facade')

app.use((error, req, res,next) => {
    error.status = error.status || 400;
    res.status(error.status).json({con:false,msg: error.message});
})

server.listen(process.env.PORT, () => {
    console.clear();
    console.log(`Server listening on port ${process.env.PORT}`);
})