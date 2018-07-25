// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import axios from 'axios'
// 引入mint-ui组件库
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

//引入mui的css
import "@/assets/libs/mui/css/mui.css"
import "@/assets/libs/mui/css/icons-extra.css"

// Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
