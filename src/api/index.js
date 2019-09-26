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
export default {
    get,
    getcinema,
    patchcinema
}