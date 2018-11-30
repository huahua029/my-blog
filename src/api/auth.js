import request from '@/helpers/request.js'

const URL = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    ISLOGIN: '/auth',
    LOGOUT: '/auth/logout'
}

export default {
    login({ username, password }) {
        return request(URL.LOGIN, 'POST', { username, password })
    },
    register({ username, password }) {
        return request(URL.REGISTER, 'POST', { username, password })
    },
    logout() {
        return request(URL.LOGOUT)
    },
    isLogin() {
        return request(URL.ISLOGIN)
    }
}