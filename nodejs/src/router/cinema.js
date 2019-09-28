const express = require('express');

const Router = express.Router();

const { insert, remove, find, update } = require('../db/mongo');

const { formatData } = require('../utils');

// 电影院列表
Router.get('/allcinema', async (req, res) => {
    let { skip, limit, sort, asc, name } = req.query;
    console.log(name)
    let data = await find('cinema', {}, { skip, limit, sort, asc, name });
    // console.log(data);

    res.send(formatData({ data }))
})

// 根据Id获取电影院
Router.get('/idcinema', async (req, res) => {
    let { skip, limit, sort, asc, _id } = req.query;
    let data = await find('cinema', { _id }, { skip, limit, sort, asc });
    // console.log(data);

    res.send(formatData({ data }))
})

// 根据ID更改电影院里的值
Router.patch('/upcinema', async (req, res) => {
    let { _id, name, address, districtName, phone, lowPrice, notice } = req.body
    console.log({ _id, name, address, districtName, phone, lowPrice, notice })
    let data = await update('cinema', { _id }, { $set: { name, address, districtName, phone, lowPrice, notice } })
    res.send(formatData({ data }))
})

// 影片列表
Router.get('/allfilm', async (req, res) => {
    let { skip, limit, sort, asc, _id } = req.query;
    let data = await find('cinemadetial', {}, { skip, limit, sort, asc });
    // console.log(data);

    res.send(formatData({ data }))
})

// 增加影片
Router.post('/addfilm', async (req, res) => {
    let { name, director, actors, category, nation, language, runtime, synopsis, poster, grade, premiereAt } = req.body;
    console.log({ name, director, actors, category, nation, language, runtime, synopsis, poster, grade })
    try {

        insert('cinemadetial', { name, director, actors, category, nation, language, runtime, synopsis, poster, grade, premiereAt });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

// 删除影片
Router.delete('/removefilm', async (req, res) => {
    let { _id } = req.body
    console.log({ _id })
    let data = await remove('cinemadetial', { _id })
    res.send(formatData({ data }))
})

// 删除影院
Router.delete('/removecinema', async (req, res) => {
    let { _id } = req.body
    console.log({ _id })
    let data = await remove('cinema', { _id })
    res.send(formatData({ data }))
})

// 获取用户信息

Router.get('/userlist', async (req, res) => {
    let { skip, limit, sort, asc, name } = req.query;
    console.log(name)
    let data = await find('user', {}, { skip, limit, sort, asc, name });
    // console.log(data);

    res.send(formatData({ data }))
})

// 根据用户电话更改用户订单
Router.patch('/uporderlist', async (req, res) => {
    let { phone, oderlist } = req.body
    // console.log({ phone, oderlist })
    let data = await update('user', { phone }, { $set: { oderlist } })
    res.send(formatData({ data }))
})



module.exports = Router;