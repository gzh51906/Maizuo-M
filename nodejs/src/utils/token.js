const jwt = require('jsonwebtoken');

<<<<<<< HEAD
const secret = 'laoxie';

// 创建
function create(data,expiresIn=60*60*24){
    //生成 Token：根据传入用户名和key进行加密，并设置有效期
    let token = jwt.sign({data}, secret, {
=======
const secret = 'ffff';

// 创建
function create(data, expiresIn = 60 * 60 * 24) {
    //生成 Token：根据传入用户名和key进行加密，并设置有效期
    let token = jwt.sign({ data }, secret, {
>>>>>>> f05211ba079cee5d5f23d7a760eb69f84622284b
        // data：加密的数据
        // secret：密钥
        // expiresIn: 有效期（单位：s）
        expiresIn
    });
    return token;
}

// 校验
<<<<<<< HEAD
function verify(token){
    let res = false;
    try{
        res = jwt.verify(token, secret);//得出解密后的结果Object:{data:xxx...}

    }catch(err){
=======
function verify(token) {
    let res = false;
    try {
        res = jwt.verify(token, secret);//得出解密后的结果Object:{data:xxx...}

    } catch (err) {
>>>>>>> f05211ba079cee5d5f23d7a760eb69f84622284b
        res = false;
    }

    return res;
}

<<<<<<< HEAD
module.exports = {create,verify}
=======
module.exports = { create, verify }
>>>>>>> f05211ba079cee5d5f23d7a760eb69f84622284b
