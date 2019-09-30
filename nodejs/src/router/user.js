const express = require('express');

const Router = express.Router();

const { insert, remove, find } = require('../db/mongo');
const { formatData } = require('../utils')

// 增：注册用户
Router.post('/reg', async (req, res) => {
    let { user, name, password, phone, sex, brit, mail, text } = req.body;
    // let data
    try {
        insert('M_userlist', { user, name, password, phone, sex, brit, mail, text });//{username,password,age,gender}
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

// 查
Router.get('/login', async (req, res) => {

    let { skip, limit, sort, asc, username } = req.query;
    console.log(1111, username)
    let data = await find('login', {}, { skip, limit, sort, asc, username });
    // console.log(data);

    res.send(formatData({ data }))
})


module.exports = Router;