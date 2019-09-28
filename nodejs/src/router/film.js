const express = require('express');

const Router = express.Router();

const { insert, remove, find, update } = require('../db/mongo');

const { formatData } = require('../utils');

Router.post('/', async (req, res) => {
    let { name,filmId,nation,language,runtime,director,category } = req.body;
    try {
        insert('film', { name,filmId,nation,language,runtime,director,category });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    } 
})

Router.delete('/', async(req, res) => {
    let { filmId } = req.body;
    try {
           remove('film', { filmId: filmId })
           res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

Router.patch('/', async(req, res) => {
    let { name,filmId } = req.body;
    let data = await update('film', { filmId }, {$set:{name}})
    res.send(formatData(data))
    
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