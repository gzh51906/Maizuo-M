const express = require('express');

const Router = express.Router();

const { insert, remove, find, update } = require('../db/mongo');

const { formatData } = require('../utils');

// 电影院列表
Router.get('/allcinema', async (req, res) => {
    let { skip, limit, sort, asc, _id } = req.query;
    let data = await find('cinema', {}, { skip, limit, sort, asc });
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





//获取茶语商品列表
Router.get('/goodslist', async (req, res) => {
    // console.log("----------------------")
    let { skip, limit, sort, asc } = req.query;
    let data = await find('yugoodslist', {}, { skip, limit, sort, asc });
    // console.log(data);

    res.send(formatData({ data }))
})

//获取评论区信息
Router.get('/goodstalk', async (req, res) => {
    // console.log("----------------------", req.query)
    let { skip, limit, sort, asc } = req.query;

    let data = await find('goodstalk', {}, { skip, limit, sort, asc });
    // console.log(data);

    res.send(formatData({ data }))
})

//根据id获取信息
Router.get('/:id', async (req, res) => {
    // console.log("--------")
    let { id } = req.params;

    let data = await find('yulist', { _id: id });
    res.send(formatData({ data }))
})






module.exports = Router;