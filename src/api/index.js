import axios from 'axios';

let maizuo = axios.create({
    baseURL:"http://localhost:1906/film"
})

async function get(params){
    let {data} = await maizuo.get('',{
        params
    })
    return data
}

export default {
    get
}