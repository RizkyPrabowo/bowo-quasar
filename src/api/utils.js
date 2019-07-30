import axios from 'axios'

const API_URL = 'http://localhost:3000/api/';

export function getApiNoAuth(){
    return axios.create({
        baseURL: API_URL,
        timeout: 10000,
        withCreditials:true,
        headers: {
            'Accces-Control-Allow-Origin':'*',
            'Contetnt-Type':'aplication/json'
        }
    })
}

export function getApi (token, params){
    if(params) { params.access_token = token } else {
        params = {
            access_token:token
        }
    }
    return axios.create({
        baseURL: API_URL,
        timeout: 10000,
        withCredentials: true,
        params: params,
        headers: {
            'Accces-Control-Allow-Origin':'*',
            'Contetnt-Type':'aplication/json; charset=utf-8'
        }
    })
}