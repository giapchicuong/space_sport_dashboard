import axios from "axios";

export const URL_SERVER = 'http://localhost:8080/api/v1'

const instance = axios.create({
    baseURL: URL_SERVER
})

instance.interceptors.request.use(config => {
    // const token = getLocalStorage('token')

    config.headers["Authorization"] = `Bearer`

    return config
}, (err) => {
    return Promise.reject(err)
})

instance.interceptors.response.use(res => {
    return res
},
    async err => {
        // if (statusError === 403) {
        //     // clearLocalStorage()
        //     window.location.href = '/auth'
        // }

        return Promise.reject(err)
    }
)

export const get = async (url) => {
    try {
        const response = await instance.get(url)

        return response
    } catch (err) {
        return console.log(err)
    }
}

export const post = async (url, data) => {
    try {
        const response = await instance.post(url, data)

        return response
    } catch (err) {
        return console.log(err)
    }
}
