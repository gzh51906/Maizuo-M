import axios from 'axios';

let maizuo = axios.create({
    baseURL: "http://localhost:1906/film"
})

async function get(params) {
    let { data } = await maizuo.get('', {
        params
    })
    return data
}
// 电影院
async function getcinema(url, params) {
    let { data } = await axios.get(url, {
        params
    })
    return data
}
async function patchcinema(url, params) {
    let { data } = await axios.patch(url, params)
    return data
}
// 增加影片
async function post(url, params) {
    let { data } = await axios.post(url, params)

    return data
}
// 删除
async function remove(url, data) {
    let date = await axios.delete(url, { data })
    return date
}


export default {
    get,
    getcinema,
    patchcinema,
    post,
    remove

}