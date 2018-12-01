import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import './styles.scss'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

Vue.filter('formatDate', function(str) {
    if (!str) return ''
    var date = new Date(str)
    var time = new Date().getTime() - date.getTime() //获取时间差
    if (time < 0) {
        return ''
    } else if ((time / 1000) < 30) {
        return '刚刚'
    } else if ((time / 1000) < 60) {
        return parseInt(time / 1000) + '秒前'
    } else if ((time / 60000) < 60) {
        return parseInt(time / 60000) + '分前'
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前'
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前'
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前'
    } else if ((time / 31536000000)) {　
        return parseInt(time / 31536000000) + '年前'
    }
})