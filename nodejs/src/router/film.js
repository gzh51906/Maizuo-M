const express = require('express');

const Router = express.Router();

const { insert, remove, find } = require('../db/mongo');

const { formatData } = require('../utils');



Router.delete('/', async(req, res) => {
    let { filmId } = req.body;
    console.log(filmId);
    try {
           remove('film', { filmId: filmId })
           res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})


// 查（获取所有商品数据）：get /user
Router.get('/', async (req, res) => {
    let { skip, limit, sort } = req.query;
    let data = await find('film', {}, { skip, limit, sort });
    // console.log(data);

    res.send(formatData({ data }))
})


Router.get('/:id', async (req, res) => {

    let { id } = req.params;
    let data = await find('film', { _id: id });

    res.send(formatData({ data }))
})

module.exports = Router;