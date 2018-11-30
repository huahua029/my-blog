// import { resolve } from "url";
import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.baseURL = ' http://blog-server.hunger-valley.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

export default function request(url, method = 'get', data = {}) {
    return new Promise((resolve, reject) => {
        let options = {
            url,
            method
        }
        if (method.toLowerCase() === 'get') {
            options.params = data
        } else {
            options.data = data
        }

        axios(options).then(
            res => {
                console.log('成功')
                resolve(res.data)
            },
            res => {
                console.log('失败')
                Message.error(res.msg)
                reject(res.msg)
            }
        ).catch(
            res => Message.error(res.msg)
        )
    })
}