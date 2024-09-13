import axios from "axios";

export const URL_SERVER = ''

const instaince = axios.create({
    baseURL: URL_SERVER
})

instaince.interceptors.request.use(config => {

}, (err) => {
    return Promise.reject(err)
})

instaince.interceptors.response.use(res => {
    return res
},
    async err => {
        if (statusError === 403) {
            clearLocalStorage()
            window.location.href = '/auth'
        }

        return Promise.reject(err)
    }
)

export const get = async (url) => {
    try {
        const response = await instaince.get(url)

        return response
    } catch (err) {
        return console.log(err)
    }
}

export const post = async (url, data) => {
    try {
        const response = await instaince.post(url, data)

        return response
    } catch (err) {
        return console.log(err)
    }
}
