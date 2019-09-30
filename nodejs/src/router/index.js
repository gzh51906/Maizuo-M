const express = require('express');

const Router = express.Router();

const { token, formatData } = require('../utils');

// 引入路由文件
<<<<<<< HEAD
const userRouter = require('./user');
=======
const flimRouter = require('./film');
const cinemaRouter = require('./cinema');
const upload = require('./upload')


>>>>>>> f05211ba079cee5d5f23d7a760eb69f84622284b

// 利用中间bodyParse格式化请求参数
Router.use(express.json(), express.urlencoded({ extended: false }))

Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
<<<<<<< HEAD
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
=======
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");
>>>>>>> f05211ba079cee5d5f23d7a760eb69f84622284b
    if (req.method == "OPTIONS") {// 在预请求中告诉浏览器这里允许跨域，让她发真实的请求过来吧
        res.sendStatus(200);
        // 等效于：res.status(200).send()
    } else {
        next();
    }
})

// 商品
<<<<<<< HEAD
Router.use('/user', userRouter);
=======

Router.use('/film', flimRouter);
Router.use('/cinema', cinemaRouter);
Router.use('/upload', upload);
>>>>>>> f05211ba079cee5d5f23d7a760eb69f84622284b
Router.get('/verify', (req, res) => {
    // 获取前端传入的token
    // 对token进行校验
    let authorization = req.header('Authorization');

    let result = token.verify(authorization);
    if (result) {
        res.send(formatData({ data: { authorization: true } }))
    } else {
        res.send(formatData({ code: 0, data: { authorization: false } }))
    }

});

<<<<<<< HEAD
=======

>>>>>>> f05211ba079cee5d5f23d7a760eb69f84622284b
module.exports = Router;