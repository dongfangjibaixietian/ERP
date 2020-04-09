import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/h8',
    })

    /*instance.interceptors.request.use(config => {
        return config
    },err => {

    })*/

    return instance(config)
}