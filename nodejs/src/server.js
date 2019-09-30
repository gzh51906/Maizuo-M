const express = require('express');
const { PORT } = require('./config.json');
const router = require('./router');
const fs = require("fs");

const app = express();

app.use(express.static('./'));

// 路由接口
// app.use((req, res) => {
//     let content = fs.readFileSync("./index.html");
//     res.set('Content-Type', 'text-html;charset=utf-8');
//     res.send(content)
// });

app.use(router)

app.listen(PORT, () => {
    console.log('服务器启动成功' + PORT);
})