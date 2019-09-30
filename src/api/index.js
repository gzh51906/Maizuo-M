import axios from 'axios';


let film = axios.create({
    baseURL: 'http://localhost:1908/film'
})

let ready_film = axios.create({
    baseURL: 'http://localhost:1908/film/ready_film'
})



async function get(url, params) {
    // console.log(params)
    let { data } = await axios.get(url, { params })
    return data
}
//获取已经上映的商品的信息
let getFilm = async (params) => {
    let { data } = await film.get("", {
        params: {
            // limit: 10 * 1
        }
    })
    data.data.forEach(element => {
        element.actors = JSON.parse(element.actors)
        element.filmType = JSON.parse(element.filmType)
        element.item = JSON.parse(element.item)
    });

    return data;
}

//获取准备上映的商品的信息
let getReadyFilm = async (params) => {

    let { data } = await ready_film.get("", {
        params: {
        }
    })
    // console.log(data)
    data.data.forEach(element => {
        element.actors = JSON.parse(element.actors)
        element.filmType = JSON.parse(element.filmType)
        element.item = JSON.parse(element.item)
        element.premiereAt = (new Date(element.premiereAt * 1)).toLocaleDateString()
    });

    return data;
}



let login = async (value, params) => {
    let { username, password } = value;
    console.log(phone, password);

    let { data } = await axios.post("http://localhost:1906/user/login", { username, password }, params)
    return data
}


async function patch(url, params) {
    // console.log(params)
    let { data } = await axios.patch(url, params)
    return data
}

let remove = () => {

}

async function cinema(limit, skip, address) {

    let { data } = await axios.get('http://localhost:1908/cinema/check', { params: { limit, skip: skip * 20 } })
    return data
}
// 区域电影院查询
async function addresscinema(address) {

    let { data } = await axios.get('http://localhost:1908/cinema/check', { params: { address } })
    return data
}

//根据filmId获取某条数据
let getflimdetail = async (filmId, params) => {
    let { data } = await axios.get(`http://localhost:1908/film/${filmId}`, { params })

    data.data.forEach(element => {
        console.log(element)
        element.actors = JSON.parse(element.actors)
        element.filmType = JSON.parse(element.filmType)
        element.photos = JSON.parse(element.photos)
        element.item = JSON.parse(element.item)
        element.premiereAt = (new Date(element.premiereAt * 1)).toLocaleDateString()
    });
    return data
}


export default {
    get,
    login,
    patch,
    delete: remove,
    cinema,
    addresscinema,
    getFilm,
    getReadyFilm,
    getflimdetail
}