const express = require('express');
const { PORT } = require('./config.json');
const router = require('./router');
<<<<<<< HEAD
const fs = require("fs");
=======
>>>>>>> f05211ba079cee5d5f23d7a760eb69f84622284b

const app = express();

app.use(express.static('./'));

// 路由接口
<<<<<<< HEAD
// app.use((req, res) => {
//     let content = fs.readFileSync("./index.html");
//     res.set('Content-Type', 'text-html;charset=utf-8');
//     res.send(content)
// });

app.use(router)
=======
app.use(router);
>>>>>>> f05211ba079cee5d5f23d7a760eb69f84622284b

app.listen(PORT, () => {
    console.log('服务器启动成功' + PORT);
})