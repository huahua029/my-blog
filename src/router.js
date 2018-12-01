import Vue from 'vue'
import Router from 'vue-router'
import store from './store/index'
import Index from './pages/Index/template.vue'
import Register from './pages/Register/template.vue'
import Login from './pages/Login/template.vue'
import Create from './pages/Create/template.vue'
import Edit from './pages/Edit/template.vue'
import User from './pages/User/template.vue'
import My from './pages/My/template.vue'
import Detail from './pages/Detail/template.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: Index
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/create',
            component: Create
        },
        {
            path: '/edit',
            component: Edit
        },
        {
            path: '/user',
            component: User
        },
        {
            path: '/my',
            component: My
        },
        {
            path: '/detail',
            component: Detail
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        store.dispatch('checkLogin').then(
            isLogin => {
                if (!isLogin) {
                    next({
                        path: '/login',
                        query: { redirect: to.fullPath }
                    })
                } else {
                    next()
                }
            }
        )
    } else {
        next()
    }
})

export default router