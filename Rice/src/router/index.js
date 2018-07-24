import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/tabbarcontainers/home'
import getCard from '@/components/tabbarcontainers/getCard'
import my from '@/components/tabbarcontainers/my'

import cardDetails from '@/components/cardDetails'

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
      name: '办卡',
      component: getCard
  },
  {
    path: '/my',
    name: '我的',
    component: my
},{
  path: '/cardDetails',
  name: '订单详情',
  component: cardDetails
}
  ]
})
