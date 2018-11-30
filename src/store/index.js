import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/api/auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: null,
        user: {}
    },
    mutations: {
        setLogin(state, payload) {
            state.isLogin = payload.isLogin
        },
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        login({ commit }, { username, password }) {
            return auth.login({ username, password })
                .then(
                    res => {
                        commit('setLogin', { isLogin: true })
                        commit('setUser', res.data)
                            // return res
                    })
        },
        register({ commit }, { username, password }) {
            return auth.register({ uername, password }).then(
                res => {
                    commit('setLogin', { isLogin: true })
                    commit('setUser', res.data)
                    return res
                })
        },
        logout({ commit }) {
            return auth.logout().then(
                res => {
                    commit('setLogin', { isLogin: false })
                    commit('setUser', null)
                }
            )
        },
        checkLogin({ commit }) {
            if (state.isLogin) {
                return
            } else {
                auth.isLogin().then(res => {
                    if (res.isLogin === true) {
                        commit('setLogin', { isLogin: true })
                        commit('setUser', res.data)
                    } else {
                        return
                    }
                })
            }
        }
    }
})