import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tabbarcontainers/home'
import getCard from '@/components/tabbarcontainers/getCard'
import my from '@/components/tabbarcontainers/my'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        name: '首页',
        component: home
    },
    {
      path: "/",
      redirect: "/home"
  },
    {
      path: '/getCard',
      name: '首页',
      component: getCard
  },
  {
    path: '/my',
    name: '首页',
    component: my
}
  ]
})
